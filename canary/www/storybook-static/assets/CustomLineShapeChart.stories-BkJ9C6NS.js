import{R as t}from"./iframe-D3XpTouC.js";import{R as D,m as p}from"./zIndexSlice-nnBmRw_5.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-KgOJI9H9.js";import{C as M}from"./CartesianGrid-BLCGW2dx.js";import{X as $}from"./XAxis-gmDKzFC9.js";import{Y as I}from"./YAxis-FbLbV3M6.js";import{L as O}from"./Legend-BFiPrn-M.js";import{T as W}from"./Tooltip-DAiSkgfh.js";import{L as f}from"./Line-y-cDtTXP.js";import{C as X}from"./Curve-CryrSNFf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DlZqYg6P.js";import"./throttle-B0HYRial.js";import"./index-DHhgNiiB.js";import"./index-DTv10PLm.js";import"./RechartsWrapper-sYdg_-aY.js";import"./axisSelectors-DLLpPrx1.js";import"./polarAxisSelectors-C3Rr3kNg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-k39_yHUv.js";import"./index-CSVEFX3e.js";import"./index-nr8cRX1L.js";import"./renderedTicksSlice-BzU7dsOB.js";import"./index-BIeNSbTD.js";import"./CartesianChart-DoW6CJ46.js";import"./chartDataContext-BRwGn-1-.js";import"./CategoricalChart-C7DNEYYD.js";import"./CartesianAxis-DzZUDYVE.js";import"./Layer-D4bzgnBD.js";import"./Text-B7A0Zl2p.js";import"./pageBackground-BB2_LToU.js";import"./useId-2hxDKCu1.js";import"./ZIndexLayer-DtbAElLD.js";import"./Label-C-8XXSAc.js";import"./dataEntryStyles-lBmwmj-v.js";import"./types-BmT-ScX1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-5OvotseX.js";import"./symbol-B5dDdDnm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BeSSiUDx.js";import"./uniqBy-CG2_XuPj.js";import"./iteratee-CyT4hR1F.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-SaX7cxM4.js";import"./Cross-BUhjZEN3.js";import"./Rectangle-pIaUnyaB.js";import"./util-Dxo8gN5i.js";import"./Sector-DmvTpGH_.js";import"./activeStyles-CSOHGyzI.js";import"./ActivePoints-D01Qbd0d.js";import"./Dot-Dh-neF-t.js";import"./RegisterGraphicalItemId-BJwNChl_.js";import"./ErrorBarContext-6Mnl7Bdn.js";import"./SetGraphicalItem-9ERbeIZR.js";import"./getRadiusAndStrokeWidthFromDot-2Ds3FVhy.js";import"./ActiveShapeUtils-DcUYSyXw.js";import"./useEffectiveDataKey-BFS5aOAm.js";import"./step-Bc6BB28K.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
