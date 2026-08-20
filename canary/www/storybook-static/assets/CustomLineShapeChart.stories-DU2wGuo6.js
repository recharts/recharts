import{R as t}from"./iframe-CSFRbakT.js";import{a as s}from"./isWellBehavedNumber-93OW3PM3.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C7YUAEdD.js";import{R as T}from"./zIndexSlice-DpZcKFY3.js";import{C as M}from"./CartesianGrid-Bbe5SuAZ.js";import{X as $}from"./XAxis-qtAkwMmZ.js";import{Y as I}from"./YAxis-DYaDbF01.js";import{L as O}from"./Legend-JfPnabH0.js";import{T as W}from"./Tooltip-DQdZxL4G.js";import{L as C}from"./Line-D5ifXaPa.js";import{C as X}from"./Curve-CfossU1f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2JgeEZu.js";import"./RechartsWrapper-CTT8y5Ry.js";import"./index-Kfu3TRgb.js";import"./index-DiZSJisN.js";import"./index-LyfzYazm.js";import"./index-_5SE_e0D.js";import"./throttle-DU_ACcBv.js";import"./axisSelectors-KHPqbB-J.js";import"./d3-scale-DhuPkMBe.js";import"./renderedTicksSlice-BfSTwOrr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BCRGB0c7.js";import"./chartDataContext-BSDgfmf3.js";import"./CategoricalChart-DTfC0HTb.js";import"./CartesianAxis-BE0DelqG.js";import"./Layer-Cas4KfrT.js";import"./Text-D8YyLcux.js";import"./DOMUtils-DF5CrQ-h.js";import"./useId-BBLcWa_d.js";import"./useBackwardsCompatibleTheme-BSlqd8DY.js";import"./Label-wJcYTwit.js";import"./ZIndexLayer-CRsGh2jd.js";import"./types-63Ql-Qpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BBe6ZWzU.js";import"./symbol-DtBce2gr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJQtsn9U.js";import"./uniqBy-Ccjwpzh7.js";import"./iteratee-NArAVAmk.js";import"./useAnimationId-CTzy6jqJ.js";import"./Cross-CceAOFwE.js";import"./Rectangle-DOmjHg1E.js";import"./util-Dxo8gN5i.js";import"./Sector-CiYrENtI.js";import"./AnimatedItems-fBpE1aA1.js";import"./ActivePoints-D10Gw0-N.js";import"./Dot-pcaRJ9oP.js";import"./RegisterGraphicalItemId-BifFS_04.js";import"./ErrorBarContext-B0XwT2-o.js";import"./GraphicalItemClipPath-BvYnrcJ_.js";import"./SetGraphicalItem-w8PwKgIn.js";import"./getRadiusAndStrokeWidthFromDot-Dzv_bsMb.js";import"./ActiveShapeUtils-r1PbrWOo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-CyAEPMCA.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
