<script setup lang="ts">
import { Coordinate } from '@element-plus/icons-vue';

defineOptions({
  name: 'ArticleList',
});
</script>

<template>
  <div class="article-list">
    <div class="article-item">
      <div class="article-header">
        <div class="article-image">
          <a href="/archives/1704188799091">
            <img
              src="https://imgapi.xl0408.top/index.php?pageid=1c748374-6b68-4e19-8260-cffb07302ae1"
              width="800"
              height="450"
              loading="lazy"
              alt="docker入门和安装"
            />
          </a>
        </div>
        <div class="article-details">
          <div class="article-category">
            <a href="/categories/ji-shu-fen-xiang">技术分享</a>
          </div>
          <div class="article-title-wrapper">
            <div class="article-title">
              <a href="/archives/1704188799091">docker入门和安装</a>
            </div>
          </div>
          <div class="article-footer article-time">
            <div>
              <el-icon><Coordinate /></el-icon>
              <div class="article-time-published">2024-01-02</div>
            </div>
            <div>
              <el-icon><Coordinate /></el-icon>
              <div class="article-time-reading">阅读时长: 14 分钟</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="article-item">
      <div class="article-header">
        <div class="article-image">
          <a href="/archives/1704188799091">
            <img
              src="https://imgapi.xl0408.top/index.php?pageid=1c748374-6b68-4e19-8260-cffb07302ae7"
              width="800"
              height="450"
              loading="lazy"
              alt="docker入门和安装"
            />
          </a>
        </div>
        <div class="article-details">
          <div class="article-category">
            <a href="/categories/ji-shu-fen-xiang">技术分享</a>
          </div>
          <div class="article-title-wrapper">
            <div class="article-title">
              <a href="/archives/1704188799091">docker入门和安装</a>
            </div>
          </div>
          <div class="article-footer article-time">
            <div>
              <el-icon><Coordinate /></el-icon>
              <div class="article-time-published">2024-01-02</div>
            </div>
            <div>
              <el-icon><Coordinate /></el-icon>
              <div class="article-time-reading">阅读时长: 14 分钟</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="article-item">
      <div class="article-header">
        <div class="article-image">
          <a href="/archives/1704188799091">
            <img
              src="https://imgapi.xl0408.top/index.php?pageid=1c748374-6b68-4e19-8260-cffb07302ae3"
              width="800"
              height="450"
              loading="lazy"
              alt="docker入门和安装"
            />
          </a>
        </div>
        <div class="article-details">
          <div class="article-category">
            <a href="/categories/ji-shu-fen-xiang">技术分享</a>
          </div>
          <div class="article-title-wrapper">
            <div class="article-title">
              <a href="/archives/1704188799091">docker入门和安装</a>
            </div>
          </div>
          <div class="article-footer article-time">
            <div>
              <el-icon><Coordinate /></el-icon>
              <div class="article-time-published">2024-01-02</div>
            </div>
            <div>
              <el-icon><Coordinate /></el-icon>
              <div class="article-time-reading">阅读时长: 14 分钟</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;
}
.article-item {
  display: flex;
  flex-direction: column;
  background-color: var(--card-background);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 27px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.article-item img {
  width: 100%;
  height: 287px;
  object-fit: cover;
}

.article-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  gap: 15px;
}

.article-category a {
  color: #fff;
  background-color: #2b95ff;
  padding: 6px 14px;
  border-radius: 6px;
  display: inline-block;
  font-size: 0.9rem;
  transition: background-color 0.5s ease;
}

.article-list .article-item:nth-child(5n + 1) .article-category a {
  background: #8ea885;
  color: #fff;
}

.article-list .article-item:nth-child(5n + 2) .article-category a {
  background: #df7988;
  color: #fff;
}

.article-list .article-item:nth-child(5n + 3) .article-category a {
  background: #0177b8;
  color: #fff;
}

.article-list .article-item:nth-child(5n + 4) .article-category a {
  background: #ffb900;
  color: #fff;
}

.article-list .article-item:nth-child(5n + 5) .article-category a {
  background: #6b69d6;
  color: #fff;
}

.article-title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-title {
  font-weight: 600;
  margin: 0;
  color: var(--card-text-color-main);
  font-size: 1.4rem;
}
.article-title a {
  color: var(--card-text-color-main);
}
.article-footer {
  display: flex;
  align-items: center;
  color: #bababa;
  gap: 15px;
  flex-wrap: wrap;
}

.article-footer > div {
  display: inline-flex;
  align-items: center;
  gap: 15px;
}
.article-footer .article-time-published,.article-footer .article-time-reading{
  color: #bababa;
  font-size: 0.8rem;
}
</style>
