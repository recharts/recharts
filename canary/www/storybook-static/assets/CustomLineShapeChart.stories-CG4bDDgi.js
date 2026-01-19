import{e as t}from"./iframe-DDDJQB5W.js";import{R as D,n as p}from"./arrayEqualityCheck-D0Xb1fN2.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-By0jGKhz.js";import{C as K}from"./CartesianGrid-jc_ttR56.js";import{X as T}from"./XAxis-wieUEhCR.js";import{Y as M}from"./YAxis-5_ZrD8qJ.js";import{L as $}from"./Legend-CsurXXSR.js";import{T as O}from"./Tooltip-DC-0U45b.js";import{L as C}from"./Line-DsjiLBEm.js";import{R as W}from"./RechartsHookInspector-UcMzq5oF.js";import{C as X}from"./Curve-zMorL5Ul.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsKQv1PU.js";import"./PolarUtils-t5VCEmBY.js";import"./RechartsWrapper-DdXQ715_.js";import"./hooks-BP25Spjv.js";import"./axisSelectors-CQBK46ul.js";import"./zIndexSlice-rPTjsX-n.js";import"./CartesianChart-ZUHoE3GB.js";import"./chartDataContext-j99xrIrV.js";import"./CategoricalChart-grKPARSf.js";import"./CartesianAxis-CkTm5RK2.js";import"./Layer-VwKMwUPk.js";import"./Text-Djbe6uvl.js";import"./DOMUtils-Dkn2KrJ_.js";import"./Label-vsQtY8U6.js";import"./ZIndexLayer-DbViNaNl.js";import"./types-CGHtFgCy.js";import"./Symbols-ykgg1Owr.js";import"./useElementOffset-qOK29dPg.js";import"./iteratee-2IfE8Xfy.js";import"./Cross-BZo1a4xI.js";import"./Rectangle-CMimnTgv.js";import"./useAnimationId-C8z7_GYR.js";import"./Sector-DoveBBFo.js";import"./ReactUtils-DAfUDxZJ.js";import"./ActivePoints-CxpylZkY.js";import"./Dot-JevgNCxq.js";import"./RegisterGraphicalItemId-Du0teFv1.js";import"./ErrorBarContext-Ds9eksq1.js";import"./GraphicalItemClipPath-DhKhb3Nw.js";import"./SetGraphicalItem-C60hp0F5.js";import"./getRadiusAndStrokeWidthFromDot-_c6DE0sw.js";import"./ActiveShapeUtils-BxCYJ66h.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DCDgebWC.js";import"./index-BliyNw2M.js";import"./ChartSizeDimensions-BYcSqOel.js";import"./OffsetShower-BlJsaDut.js";import"./PlotAreaShower-rDHCl9WN.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
