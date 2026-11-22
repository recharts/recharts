import{R as t}from"./iframe-BU2uaiQT.js";import{R as D,l as p}from"./zIndexSlice-B7Ww3qol.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DxccN4nX.js";import{C as M}from"./CartesianGrid-DTrh7iQN.js";import{X as $}from"./XAxis-BnGZclY4.js";import{Y as I}from"./YAxis-D8lRSYCy.js";import{L as O}from"./Legend-BRb4WwmG.js";import{T as W}from"./Tooltip-Di5rd_WR.js";import{L as f}from"./Line-D-cMfYZE.js";import{C as X}from"./Curve-CAcSf3Dw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C2wLywwD.js";import"./throttle-CcBx4b7F.js";import"./index-DgFA6NAr.js";import"./index-BrUaXQP2.js";import"./RechartsWrapper-DJs7SFO5.js";import"./axisSelectors-D_lL4SFu.js";import"./polarAxisSelectors-NZrfm7K-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmCizgpV.js";import"./index-KnqMoSVw.js";import"./index-Y51TWOSn.js";import"./renderedTicksSlice-CbO7RmCe.js";import"./index-BmKufkZC.js";import"./fillDefinitions-CvAEkStr.js";import"./CartesianChart-C6-Tr1WN.js";import"./chartDataContext-C2FLfdfd.js";import"./CategoricalChart-LCCfHS5i.js";import"./CartesianAxis-CdjY0Szh.js";import"./Layer-Bk2JkGA1.js";import"./Text-DcepGaW8.js";import"./ZIndexLayer-DWfXGHkj.js";import"./Label-CM1LVEBq.js";import"./types-BGeljdCR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D3wHF1gQ.js";import"./symbol-4tNLkD_c.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BuXfzakd.js";import"./uniqBy-BDVNLrho.js";import"./iteratee-CgzDSGu2.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DGhOgRI0.js";import"./Cross-CmIGzPmv.js";import"./Rectangle-uMWe5cKm.js";import"./util-Dxo8gN5i.js";import"./Sector-PvLx7sIM.js";import"./getRadiusAndStrokeWidthFromDot-EXJcUNWf.js";import"./dataEntryStyles-BQSK-138.js";import"./ActivePoints-BVY4H7tc.js";import"./Dot-tdH7rvCo.js";import"./activeStyles-C3KdIcht.js";import"./ErrorBarContext-CIErDLim.js";import"./SetGraphicalItem-DIE9SpoX.js";import"./ActiveShapeUtils-BmdPhGHL.js";import"./useEffectiveDataKey-u5bBQA4i.js";import"./step-B9D1ky0j.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
