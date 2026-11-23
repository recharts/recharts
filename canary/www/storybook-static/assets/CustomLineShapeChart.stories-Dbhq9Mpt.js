import{R as t}from"./iframe-Bo9DV_RF.js";import{R as D,l as p}from"./zIndexSlice-ChGxP5I9.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CVAH-tM4.js";import{C as M}from"./CartesianGrid-Wpeq6wtu.js";import{X as $}from"./XAxis-hzMML8e7.js";import{Y as I}from"./YAxis-CK1muElb.js";import{L as O}from"./Legend-ujCCnnlq.js";import{T as W}from"./Tooltip-CgTtgD3h.js";import{L as f}from"./Line-A1JFBNP7.js";import{C as X}from"./Curve-Dm-GvmWp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./throttle-CaIo9_rk.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./RechartsWrapper-D6SFyLdk.js";import"./axisSelectors-BUIYbOzk.js";import"./polarAxisSelectors-DgJeannD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoInTKj4.js";import"./index-Dj5W-yVu.js";import"./index-PvdQicqP.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./chartDataContext-PPXpQSNc.js";import"./CategoricalChart-BdPgBmoC.js";import"./CartesianAxis-_PdJmc1T.js";import"./Layer-C6lb2zxM.js";import"./Text-DQn8LN2h.js";import"./ZIndexLayer-D-AkOEB1.js";import"./Label-BywaPoTf.js";import"./types-DltK9JsS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./path-BBMZd4YL.js";import"./useElementOffset-UcOt8HAd.js";import"./uniqBy-Dalz8XIr.js";import"./iteratee-CXGy7xEC.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-TvJ5tZp1.js";import"./Cross-DKdlw8Q0.js";import"./Rectangle-RS1J8Vgk.js";import"./util-Dxo8gN5i.js";import"./Sector-DgCGLhDo.js";import"./getRadiusAndStrokeWidthFromDot-CqTAMhL0.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./ActivePoints-CviyBCS_.js";import"./Dot-DxKRRRBk.js";import"./activeStyles-mw-DKPXy.js";import"./ErrorBarContext-BobbhAG8.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./useEffectiveDataKey-Er14ucR5.js";import"./step-5knHZEdX.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
