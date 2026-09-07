import{R as t}from"./iframe-BkeN00Xj.js";import{a as p}from"./isWellBehavedNumber-DpaF5Qbq.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-TmwIsQGE.js";import{R as T}from"./zIndexSlice-B-x7pTGs.js";import{C as M}from"./CartesianGrid-jpY6hevw.js";import{X as $}from"./XAxis-CtkFJuG7.js";import{Y as I}from"./YAxis-DJRwhJXR.js";import{L as O}from"./Legend-Bk8wjFJ6.js";import{T as W}from"./Tooltip-VC28gVlA.js";import{L as C}from"./Line-BystEDAn.js";import{C as X}from"./Curve-CqZmQlC4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./RechartsWrapper-C3Vxgl3Z.js";import"./axisSelectors-CdQeSFob.js";import"./throttle-DVvQgSvv.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./CartesianAxis-LtwF5IC-.js";import"./Layer-CQvSRJEy.js";import"./Text-B4YmNBvy.js";import"./DOMUtils-BtNtGSBk.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./Label-C5oKPJnD.js";import"./ZIndexLayer-BM7jKjXD.js";import"./types-CHY5UDxi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-AyonCz9c.js";import"./symbol-D8YHtFfZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B7hTb3Ey.js";import"./uniqBy-CPVlAjhe.js";import"./iteratee-xMasKDoT.js";import"./useAnimationId-DIIcOQR8.js";import"./Cross-DDcONwgE.js";import"./Rectangle-DByb3FOE.js";import"./util-Dxo8gN5i.js";import"./Sector-DAcF8V-6.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./ActivePoints-BZpnaHk5.js";import"./Dot-BSZNpi6H.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./ErrorBarContext-CjOXvaZb.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./getRadiusAndStrokeWidthFromDot-C0jg-2Bd.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-6rSS0kJE.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
