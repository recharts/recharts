import{R as t}from"./iframe-CoKy4elT.js";import{a as p}from"./isWellBehavedNumber-1a8W8TdO.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DozK8Vwu.js";import{R as T}from"./zIndexSlice-CY4yYEbq.js";import{C as M}from"./CartesianGrid-CbNhhmdD.js";import{X as $}from"./XAxis-DsRQf7G7.js";import{Y as I}from"./YAxis-BJGGz_YN.js";import{L as O}from"./Legend-D3IpGgUQ.js";import{T as W}from"./Tooltip-K6a2MI97.js";import{L as C}from"./Line-SzjmsAH7.js";import{C as X}from"./Curve-B2xh1z9j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfSl0Rns.js";import"./resolveDefaultProps-CDt21lVt.js";import"./RechartsWrapper-DkPhnPXC.js";import"./index-B6XlI2wQ.js";import"./index-C3h5ViMU.js";import"./index-Bjw5bEKW.js";import"./index-B3BiA27P.js";import"./immer-lWVojOeC.js";import"./renderedTicksSlice-DBzopiP-.js";import"./axisSelectors-D-8m2pyG.js";import"./d3-scale-xTkB24fT.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DX79lhQp.js";import"./chartDataContext-JpjBb8GI.js";import"./CategoricalChart-DaCgDPQn.js";import"./CartesianAxis-DoYCv6Ih.js";import"./Layer-k2Wdsuzq.js";import"./Text-DL1Q3xYK.js";import"./DOMUtils-YWM1N8Io.js";import"./Label-MtH_fF3i.js";import"./ZIndexLayer-Gbc9J2Kq.js";import"./types-Du-R6iBe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-mGXHXz_j.js";import"./symbol-D9vQ6-Jo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOdjfFuB.js";import"./uniqBy-CtAtk69m.js";import"./iteratee-BljMhTLe.js";import"./useAnimationId-DCY8-kt_.js";import"./Cross-Bpe2S7--.js";import"./Rectangle-CO7CILtg.js";import"./Sector-COV7TTg8.js";import"./AnimatedItems-CIond_pq.js";import"./ActivePoints-BzkJ5aTL.js";import"./Dot-CVh_JGUT.js";import"./RegisterGraphicalItemId-CuDS2LmP.js";import"./ErrorBarContext-DteVVWve.js";import"./GraphicalItemClipPath-BE9EOFft.js";import"./SetGraphicalItem-Bcs0Y3bf.js";import"./getRadiusAndStrokeWidthFromDot-DFePIRu3.js";import"./ActiveShapeUtils-CdBo7Ldv.js";import"./step-DAyKFUyW.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
