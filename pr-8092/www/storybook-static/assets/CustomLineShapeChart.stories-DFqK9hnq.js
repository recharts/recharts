import{R as t}from"./iframe-DloB-Tup.js";import{R as D,m as p}from"./zIndexSlice-DkoSoypq.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DDkftcp7.js";import{C as M}from"./CartesianGrid-BMMYdRzG.js";import{X as $}from"./XAxis-85tJ7DjB.js";import{Y as I}from"./YAxis-C2kKnKD5.js";import{L as O}from"./Legend-CRq1oXoj.js";import{T as W}from"./Tooltip-CVyBTsCT.js";import{L as f}from"./Line-BakhYVyl.js";import{C as X}from"./Curve-Dw8-x6-u.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./throttle-DHxiFtgA.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./RechartsWrapper-C7KZ4AFC.js";import"./axisSelectors-5JufQAoG.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cp_uhw02.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./CartesianAxis-3ybsRmFq.js";import"./Layer-S6G7_nQD.js";import"./Text-BM9EdhAp.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./Label-BCZcSJT3.js";import"./dataEntryStyles-DO0_QeZe.js";import"./types-BVm9IbXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-OqBqpZTo.js";import"./symbol-D_Qfgjrw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-fPA8IkJo.js";import"./uniqBy-C9ysuPBd.js";import"./iteratee-C2C5pJva.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-B4JCM27x.js";import"./Cross-Dqr7MU5J.js";import"./Rectangle-DT8WiWUe.js";import"./util-Dxo8gN5i.js";import"./Sector-CMUhvR-T.js";import"./LabelList-B_3Vas12.js";import"./ActivePoints-Baun6K6R.js";import"./Dot-CiBIq_Wk.js";import"./activeStyles-B8TQJkxp.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./ErrorBarContext-CBYSVt7N.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./getRadiusAndStrokeWidthFromDot-ymvOuKSP.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./useEffectiveDataKey-B7m-hO1Q.js";import"./step-CNEatR3g.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
