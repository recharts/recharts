import{R as t}from"./iframe-oenQDkae.js";import{a as p}from"./isWellBehavedNumber-D7fX2EcX.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bivx4Co0.js";import{R as T}from"./zIndexSlice-BolP6taR.js";import{C as M}from"./CartesianGrid-DORjFfnI.js";import{X as $}from"./XAxis-BAapT_j6.js";import{Y as I}from"./YAxis-DxjcPAu-.js";import{L as O}from"./Legend-DfPA-Tai.js";import{T as W}from"./Tooltip-DX4d1O6-.js";import{L as C}from"./Line-DmgKRVbq.js";import{C as X}from"./Curve-BSb99er_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMJPtlp2.js";import"./RechartsWrapper-CzSj_Srx.js";import"./axisSelectors-DouK1BqP.js";import"./throttle-MDW_1VLh.js";import"./index-BSFq4RG1.js";import"./index-MHyjaTC8.js";import"./d3-scale-DtmS-GpC.js";import"./index-BMWVfK_z.js";import"./index-ZmrPVgl6.js";import"./renderedTicksSlice-CXVO1QKM.js";import"./index-CZXeDDYw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Chu1Jshw.js";import"./chartDataContext-CJ85p7Fi.js";import"./CategoricalChart-BmbR8bdU.js";import"./CartesianAxis-DeqFFLVl.js";import"./Layer-IdKk3EZa.js";import"./Text-D5ThFr-V.js";import"./DOMUtils-Cj13ECRs.js";import"./useId-CdRDsFJI.js";import"./useBackwardsCompatibleTheme-BdI5Azyq.js";import"./Label-BCANxpap.js";import"./ZIndexLayer-D9GKmy2X.js";import"./types-DhnB6M_7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-JpTNmqfe.js";import"./symbol-B_9Bw_Tg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CWxGqy1I.js";import"./uniqBy-BAQHpx-P.js";import"./iteratee-Cc1JTqL9.js";import"./useAnimationId-BXnU9mnj.js";import"./Cross-CMU6b0IL.js";import"./Rectangle-7MVyRVY_.js";import"./util-Dxo8gN5i.js";import"./Sector-iX8mtA0m.js";import"./AnimatedItems-DDFphvv3.js";import"./ActivePoints-BSQAnEDd.js";import"./Dot-C-Nopngh.js";import"./RegisterGraphicalItemId-CysjmqkX.js";import"./ErrorBarContext-D1o9R7Ud.js";import"./GraphicalItemClipPath-D7deAvGW.js";import"./SetGraphicalItem-BPqapuvy.js";import"./getRadiusAndStrokeWidthFromDot-D9taOjnP.js";import"./ActiveShapeUtils-C5gHJrTE.js";import"./useGraphicalItemIdentity-ygWefbro.js";import"./step-Bev09Hzp.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
