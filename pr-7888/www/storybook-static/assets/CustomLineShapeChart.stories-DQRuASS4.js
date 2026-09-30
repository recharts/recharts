import{R as t}from"./iframe-CQ0Lljz5.js";import{a as p}from"./isWellBehavedNumber-B5oWMPg-.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D_7cworq.js";import{R as T}from"./zIndexSlice-DEHrA3Rr.js";import{C as M}from"./CartesianGrid-DAHH3aHX.js";import{X as $}from"./XAxis-DOKTQQJO.js";import{Y as I}from"./YAxis-BU1cXErq.js";import{L as O}from"./Legend-DCzKqiBj.js";import{T as W}from"./Tooltip-pdF5IOJh.js";import{L as C}from"./Line-BU-Fmcg-.js";import{C as X}from"./Curve-PlZhcAcE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJD_NHtt.js";import"./RechartsWrapper-Dx4TkxXI.js";import"./axisSelectors-CIePYxzF.js";import"./throttle-D0Qp2wbd.js";import"./index-CgKUH7Pt.js";import"./index-DJBjlh9k.js";import"./d3-scale-bZdbqgmB.js";import"./index--XZnrZ3Q.js";import"./index-_-Q-FGj6.js";import"./renderedTicksSlice-BkkJdu7D.js";import"./index-BGyIiFfh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-MQW7TOME.js";import"./chartDataContext-DkzXheoo.js";import"./CategoricalChart-DFae7qCs.js";import"./CartesianAxis-K2XDXRUA.js";import"./Layer-DFHm6cg2.js";import"./Text-CnTJRORA.js";import"./DOMUtils-DMu9BuDW.js";import"./useId-aq3DvHIK.js";import"./useBackwardsCompatibleTheme-CNmncO23.js";import"./Label-D63u7ve3.js";import"./ZIndexLayer-Bj3SLdvY.js";import"./types-BxcasGOq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DGRT2wS9.js";import"./symbol-DzHt0ydM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MlAUb8gx.js";import"./uniqBy-DGselmkZ.js";import"./iteratee-n8pR5P_Y.js";import"./useAnimationId-CcXfV18V.js";import"./Cross-DCgL5DEb.js";import"./Rectangle-scsETNBO.js";import"./util-Dxo8gN5i.js";import"./Sector-DnZZl6ii.js";import"./AnimatedItems-Bf5nKgQj.js";import"./ActivePoints-BmyDUMzQ.js";import"./Dot-DF8MgqBD.js";import"./RegisterGraphicalItemId-q_Z5CO-E.js";import"./ErrorBarContext-BLRPtsGK.js";import"./GraphicalItemClipPath-CgRak6Te.js";import"./SetGraphicalItem-u3emxpjK.js";import"./getRadiusAndStrokeWidthFromDot-BWi-x41h.js";import"./ActiveShapeUtils-C1gkAgLd.js";import"./useGraphicalItemIdentity-DI-yqd9-.js";import"./step-Bxet3luG.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
