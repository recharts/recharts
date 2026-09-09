import{R as t}from"./iframe-DOP-jAxw.js";import{a as p}from"./isWellBehavedNumber-aeEmpyhq.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DlBZt8ph.js";import{R as T}from"./zIndexSlice-iZLT4mgM.js";import{C as M}from"./CartesianGrid-B6zlt5Uu.js";import{X as $}from"./XAxis-DUVFq7Gr.js";import{Y as I}from"./YAxis-Db4GFYrx.js";import{L as O}from"./Legend-CI21USgl.js";import{T as W}from"./Tooltip-QnPg_YT4.js";import{L as C}from"./Line-PilCUCgO.js";import{C as X}from"./Curve-_tgXMq7w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C42OrRbv.js";import"./RechartsWrapper-Q1Jm5bKD.js";import"./axisSelectors-B_fxjvJU.js";import"./throttle-D7DQi97E.js";import"./index-CCuF4-CL.js";import"./index-zAmCVOdn.js";import"./d3-scale-DzSw552P.js";import"./index-bWqnTni2.js";import"./index-DtoMVaOV.js";import"./renderedTicksSlice-CNec-Jhj.js";import"./index-D_24CIxZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-PeHZ3LWB.js";import"./chartDataContext-CuKpjHMI.js";import"./CategoricalChart-CByA_zEa.js";import"./CartesianAxis-B-kSgpVr.js";import"./Layer-CsLYPkNS.js";import"./Text-BM4OLvWb.js";import"./DOMUtils-hJnM7D4i.js";import"./useId-DriqVEjQ.js";import"./useBackwardsCompatibleTheme-lpZr1fce.js";import"./Label-BQxh1muY.js";import"./ZIndexLayer-CERsRXD7.js";import"./types-Bd_t3tQp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DRTOXkwu.js";import"./symbol-5Hp0bSW3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-xs82StaJ.js";import"./uniqBy-BH46jqOd.js";import"./iteratee-B8SE9EXK.js";import"./useAnimationId-DvdWCYQm.js";import"./Cross-R415-PMR.js";import"./Rectangle-wYU6J8iP.js";import"./util-Dxo8gN5i.js";import"./Sector-SOWdtCxs.js";import"./AnimatedItems-D09OLiJi.js";import"./ActivePoints-BBWJLt59.js";import"./Dot-4jCuUfJZ.js";import"./RegisterGraphicalItemId-a8qjrkCj.js";import"./ErrorBarContext-3aBgegVQ.js";import"./GraphicalItemClipPath-BIJRZhz8.js";import"./SetGraphicalItem-BdxyruZp.js";import"./getRadiusAndStrokeWidthFromDot-1Y9AsD59.js";import"./ActiveShapeUtils-DE-7R1j_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-DlXDgVUU.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
