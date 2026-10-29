import{R as t}from"./iframe-BWDOX6-u.js";import{R as D,l as p}from"./zIndexSlice-DNz64E0x.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BSMb-Lal.js";import{C as M}from"./CartesianGrid-DJvIAqQu.js";import{X as $}from"./XAxis-Bg1rIWpH.js";import{Y as I}from"./YAxis-CmY1zbsh.js";import{L as O}from"./Legend-DF6DtGN2.js";import{T as W}from"./Tooltip-E8YPsfxS.js";import{L as f}from"./Line-CuDWoKpi.js";import{C as X}from"./Curve-CrU39aeO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcUHQ_F5.js";import"./throttle-CylvlJBG.js";import"./index-DzgZ7zsu.js";import"./index-DnIYcPIz.js";import"./RechartsWrapper-BRyXUEk1.js";import"./axisSelectors-DEg5_gPJ.js";import"./polarAxisSelectors-DK35yTF0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B4wSjZj4.js";import"./index-BJ2UcSZQ.js";import"./index-w7-d2vln.js";import"./renderedTicksSlice-BqxX5aIt.js";import"./index-KUhAAXQC.js";import"./CartesianChart-BPCuN6sc.js";import"./ZIndexPortal-BU5aU1wi.js";import"./CategoricalChart--0r08YsN.js";import"./CartesianAxis-DBuYWNnG.js";import"./Layer-DzTaBPhB.js";import"./Text-BC76d3cf.js";import"./pageBackground-B9VN7P3l.js";import"./ZIndexLayer-BpYNbZQ_.js";import"./Label-C7PH8HeI.js";import"./types-Kg6mNYCQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BzcCXNpL.js";import"./symbol-X6QlfoW2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DDtS6U3Q.js";import"./uniqBy-BH4YjQyG.js";import"./iteratee-CCjAiajQ.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DnCcjn8H.js";import"./Cross-Bp6FZ5qp.js";import"./Rectangle-YmvaNl9F.js";import"./util-Dxo8gN5i.js";import"./Sector-D4IBl-dY.js";import"./LabelList-Bpfp_vOc.js";import"./ActivePoints-CMBx6Neg.js";import"./Dot-BD2cxhmc.js";import"./activeStyles-1bnNLlnc.js";import"./dataEntryStyles-BX1vU1kO.js";import"./ErrorBarContext-CMdxFUFX.js";import"./SetGraphicalItem-DERdfH3j.js";import"./getRadiusAndStrokeWidthFromDot-02xZ6iGX.js";import"./ActiveShapeUtils-7f2VgziP.js";import"./useEffectiveDataKey-D_c8pfvC.js";import"./step-Cs1Ofcpa.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Jt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
