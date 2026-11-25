import{R as t}from"./iframe-CVu8zrUS.js";import{R as D,l as p}from"./zIndexSlice-Bq6bmQlp.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-PTTGyG5b.js";import{C as M}from"./CartesianGrid-CYdjKJuY.js";import{X as $}from"./XAxis-Cmp_u62X.js";import{Y as I}from"./YAxis-CbExEBw4.js";import{L as O}from"./Legend-Ce9eAhQx.js";import{T as W}from"./Tooltip-8ZVz6rt9.js";import{L as f}from"./Line-CcBwkv4q.js";import{C as X}from"./Curve-DnKmeSPX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./throttle-DhpuiNc1.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./RechartsWrapper-BMgc3fuA.js";import"./axisSelectors-Sot67Aim.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BfJtYZLb.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./CartesianAxis-Ctwjf5Ws.js";import"./Layer-Cu87ioWV.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./Label-Cx8AJG-1.js";import"./types-DISj1D7D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CPBzhLNS.js";import"./symbol-BnOQ6fEU.js";import"./path-BBMZd4YL.js";import"./useElementOffset-J7kEM2re.js";import"./uniqBy-CRfw9j4K.js";import"./iteratee-ExFm1WSh.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-HRjjYmjj.js";import"./Cross-Bguv1Xns.js";import"./Rectangle-BixLzELc.js";import"./util-Dxo8gN5i.js";import"./Sector-Cdqieute.js";import"./getRadiusAndStrokeWidthFromDot-C0Ej1DHm.js";import"./dataEntryStyles-BbIoPGWl.js";import"./ActivePoints-y_nl0SSe.js";import"./Dot-CJSjjEfy.js";import"./activeStyles-BYV0uDWS.js";import"./ErrorBarContext-v1LyTi-B.js";import"./SetGraphicalItem-BzQ3GKka.js";import"./ActiveShapeUtils-BVHA2GWO.js";import"./useEffectiveDataKey-BkqeFEex.js";import"./step-B759BuMX.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
