import{R as t}from"./iframe-mnAzB4o-.js";import{a as s}from"./isWellBehavedNumber-Csz_97LF.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-wrzwy6-X.js";import{R as T}from"./zIndexSlice-D6JZj8nu.js";import{C as M}from"./CartesianGrid-BOdqfpIi.js";import{X as $}from"./XAxis-BJJ3SHcS.js";import{Y as I}from"./YAxis-CaUMjbmS.js";import{L as O}from"./Legend-CmWQNkqO.js";import{T as W}from"./Tooltip-CkPVTX4w.js";import{L as C}from"./Line-ClUmRFWF.js";import{C as X}from"./Curve-o9IX9QPv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DC3M7TEl.js";import"./RechartsWrapper-C7l6xfyV.js";import"./index-DwcIeoVT.js";import"./index-UdOV9nJO.js";import"./index-BVGAPrUY.js";import"./index-CtygltyQ.js";import"./throttle-DkA8wIil.js";import"./axisSelectors-C1jFNzqn.js";import"./d3-scale-CRNCXhx2.js";import"./renderedTicksSlice-Bqv1L3Am.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3iAW6ju.js";import"./chartDataContext-d1JBVIv3.js";import"./CategoricalChart-Dvtv2sve.js";import"./CartesianAxis-BJUtWOS_.js";import"./Layer-Cr54uUjf.js";import"./Text-BI5zaK2n.js";import"./DOMUtils-CS3XthwK.js";import"./useId-DlzE9UHI.js";import"./useBackwardsCompatibleTheme-D4uIz6B3.js";import"./Label-CHzafVhK.js";import"./ZIndexLayer-B_AeVWGh.js";import"./types-CREZv15c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Kcb7M6d1.js";import"./symbol-CzjYWchS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bv8ynH_4.js";import"./uniqBy-xa31W4My.js";import"./iteratee-BHZlqNLc.js";import"./useAnimationId-C2CD38MP.js";import"./Cross-ixwHigiP.js";import"./Rectangle-D-paqn8Q.js";import"./util-Dxo8gN5i.js";import"./Sector-B_puyY74.js";import"./AnimatedItems-DKc9cClm.js";import"./ActivePoints-0ixA6i7h.js";import"./Dot-CbnujumB.js";import"./RegisterGraphicalItemId-CVIGTwbR.js";import"./ErrorBarContext-BqNwP9Uy.js";import"./GraphicalItemClipPath-2kfGKsY1.js";import"./SetGraphicalItem-C3b_Fk26.js";import"./getRadiusAndStrokeWidthFromDot-CGiQ8j25.js";import"./ActiveShapeUtils-CPpaX7pN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-BYsm7KBD.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
