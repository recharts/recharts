import{R as t}from"./iframe-B0ZE5sWn.js";import{a as p}from"./isWellBehavedNumber-c-pVuqcz.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DQa07Vkb.js";import{R as T}from"./zIndexSlice-CRYD7Kkj.js";import{C as M}from"./CartesianGrid-DO5IH5o1.js";import{X as $}from"./XAxis-DxhJhgqY.js";import{Y as I}from"./YAxis-CIOXXUEI.js";import{L as O}from"./Legend-DSA6M2et.js";import{T as W}from"./Tooltip-BXGXDnda.js";import{L as C}from"./Line-ChohRp9N.js";import{C as X}from"./Curve-DHsBKDuU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DkU3qXBk.js";import"./RechartsWrapper-D_J70Kvy.js";import"./axisSelectors-CmZ6PEb7.js";import"./throttle-D8bbTBc2.js";import"./index-DSEHXiiH.js";import"./index-CVaJFnop.js";import"./d3-scale-BSLND3-m.js";import"./index-CUIhphZ8.js";import"./index-CrLSWODu.js";import"./renderedTicksSlice-2DEyX82P.js";import"./index-x3K7igv_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEyr3eWS.js";import"./chartDataContext-C_Y-GQC5.js";import"./CategoricalChart-BW6OVLWc.js";import"./CartesianAxis-Cze39DWA.js";import"./Layer-B5uUwgDJ.js";import"./Text-hT0G9UKp.js";import"./DOMUtils-BtIen-TW.js";import"./useId-CIOpxIEE.js";import"./useBackwardsCompatibleTheme-C9hE96Ha.js";import"./Label-CDRY23He.js";import"./ZIndexLayer-COO7NwIi.js";import"./types-CvLOqkZ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CxhmSzKz.js";import"./symbol-aNk_0Slx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRtIxZBy.js";import"./uniqBy-MZlHu-wY.js";import"./iteratee-2ZaQLBwO.js";import"./useAnimationId-xIPnyE2V.js";import"./Cross-CjsxhdWW.js";import"./Rectangle-DRbsFhhP.js";import"./util-Dxo8gN5i.js";import"./Sector-BQd_gsPl.js";import"./AnimatedItems-DDDw_SSj.js";import"./ActivePoints-jrQT7wQp.js";import"./Dot-BuzDkghy.js";import"./RegisterGraphicalItemId-DvHsssZk.js";import"./ErrorBarContext-DIoqVk5E.js";import"./GraphicalItemClipPath-CP8DwxaV.js";import"./SetGraphicalItem-AgCaMkoB.js";import"./getRadiusAndStrokeWidthFromDot-fsgEyTwP.js";import"./ActiveShapeUtils-DW159Z87.js";import"./useGraphicalItemIdentity-DKLRMGU-.js";import"./step-CGkCO3y3.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
