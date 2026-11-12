import{R as t}from"./iframe-C9QnkkRp.js";import{R as D,l as p}from"./zIndexSlice-BYQlmGuM.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-3PxakhSA.js";import{C as M}from"./CartesianGrid-DQGCFF0G.js";import{X as $}from"./XAxis-49PSd8B9.js";import{Y as I}from"./YAxis-cnj8Nk2R.js";import{L as O}from"./Legend-CGXNIB2v.js";import{T as W}from"./Tooltip-Cq-CR73o.js";import{L as f}from"./Line-wEa7wjvf.js";import{C as X}from"./Curve-Dqipz6v0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./throttle-CzhN4mlB.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./RechartsWrapper-Cq91RCWh.js";import"./axisSelectors-CTzSQU4W.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Yr2mcnpg.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./CartesianAxis-CyUzu-Nz.js";import"./Layer-CEkcTjee.js";import"./Text-BwyCofjZ.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./Label-yo2OQSgL.js";import"./types-DqaK-59q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D6kGSifP.js";import"./symbol-CG55pC-Z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yJR4mmFg.js";import"./uniqBy-B7emlUis.js";import"./iteratee-MiGwBwmm.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CShc60ZQ.js";import"./Cross-BmYQMtAS.js";import"./Rectangle-CvNdNhfG.js";import"./util-Dxo8gN5i.js";import"./Sector-irNxwfe5.js";import"./dataEntryStyles-BFdezSvK.js";import"./ActivePoints-D6MvrL16.js";import"./Dot-Dmq_4Bsa.js";import"./activeStyles-CN7lMIFZ.js";import"./ErrorBarContext-BjyFMzrh.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getRadiusAndStrokeWidthFromDot-CyNFak7V.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./useEffectiveDataKey-DiymfXWH.js";import"./step-DY5nvAcp.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
