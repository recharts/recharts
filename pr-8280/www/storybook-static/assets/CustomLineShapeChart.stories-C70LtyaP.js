import{R as t}from"./iframe-B3Q9BieZ.js";import{R as D,l as p}from"./zIndexSlice-sqFd1bzt.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B3fT3Xm7.js";import{C as M}from"./CartesianGrid-DTELdrvM.js";import{X as $}from"./XAxis-D2lT-EVr.js";import{Y as I}from"./YAxis-DvVjGCkX.js";import{L as O}from"./Legend-D54bBuuY.js";import{T as W}from"./Tooltip-C3uuRk_U.js";import{L as f}from"./Line-CqPtSHor.js";import{C as X}from"./Curve-1WEPDMRv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BfktPE_A.js";import"./throttle-D7B_fzZD.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./RechartsWrapper-Cfrbgio_.js";import"./axisSelectors-DvTAFEOk.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C94aTEcE.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./CartesianAxis-COGs4upa.js";import"./Layer-CM6IL6TI.js";import"./Text-vJxvkBMX.js";import"./ZIndexLayer-D273i2uL.js";import"./Label-DqBOaUXK.js";import"./types-D4j33x05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CWY2nbRa.js";import"./symbol-MUjZPdnP.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BjLkxFtO.js";import"./uniqBy-BY6j9O5X.js";import"./iteratee-CK_fQl9o.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-2VJaNjeA.js";import"./Cross-D4GVRzZw.js";import"./Rectangle-uE9FLPYH.js";import"./util-Dxo8gN5i.js";import"./Sector-C3a2lDVG.js";import"./getRadiusAndStrokeWidthFromDot-CVv--GX5.js";import"./dataEntryStyles-DvvOVUEP.js";import"./ActivePoints-tqDqo9N4.js";import"./Dot-ClUpNew-.js";import"./activeStyles-BLYIXqri.js";import"./ErrorBarContext-B613I2F5.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./useEffectiveDataKey-CELfbHpr.js";import"./step-CLCxHiga.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
