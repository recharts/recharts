import{R as t}from"./iframe-BMnEk6rk.js";import{R as D,l as p}from"./zIndexSlice-AHK2lLDY.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-sfspemXo.js";import{C as M}from"./CartesianGrid-BgeAcGhx.js";import{X as $}from"./XAxis-DO8MMAbO.js";import{Y as I}from"./YAxis-Bg-R0mkd.js";import{L as O}from"./Legend-CKtpkcjd.js";import{T as W}from"./Tooltip-CdRDsB00.js";import{L as f}from"./Line-uhUVV2ZJ.js";import{C as X}from"./Curve-D8kPdRuj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B_QljJZX.js";import"./throttle-BLJmRI7W.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./RechartsWrapper-D4g7WfzD.js";import"./axisSelectors-p5JtpZwX.js";import"./polarAxisSelectors-CeZI25QH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFf5tOkL.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-Cs2FdYvJ.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./CartesianAxis-1xDTwGjL.js";import"./Layer-DhQvAzDq.js";import"./Text-C8Qyn2EQ.js";import"./pageBackground-CtZK7idk.js";import"./ZIndexLayer-B5NKkV0N.js";import"./Label-h8wQzOus.js";import"./types-BEqbC_4a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CKZUIDIC.js";import"./uniqBy-m6py-FT2.js";import"./iteratee-Dc85xDQN.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Ctda-hFk.js";import"./Cross-CkQASEDQ.js";import"./Rectangle-CyQcxgx5.js";import"./util-Dxo8gN5i.js";import"./Sector-GHL6DImZ.js";import"./LabelList-Dd3JyrGq.js";import"./ActivePoints-BPIJeIuh.js";import"./Dot-BOMHkylR.js";import"./activeStyles-DlaO21qO.js";import"./dataEntryStyles-DegCLzhf.js";import"./ErrorBarContext-dq2106Y0.js";import"./SetGraphicalItem-C1JNOq53.js";import"./getRadiusAndStrokeWidthFromDot-BNTnGfox.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./useEffectiveDataKey-DQstj3az.js";import"./step-OCTxecjD.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Jt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
