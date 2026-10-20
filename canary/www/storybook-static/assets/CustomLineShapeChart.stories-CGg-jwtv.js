import{R as t}from"./iframe-CZEQ_wjd.js";import{a as p}from"./isWellBehavedNumber-B8rPL1qd.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D8HS5kdE.js";import{R as T}from"./zIndexSlice-CGZbBTjh.js";import{C as M}from"./CartesianGrid-BDIBIFV-.js";import{X as $}from"./XAxis-GN6jnA3k.js";import{Y as I}from"./YAxis-BLT7Ik9Z.js";import{L as O}from"./Legend-CBZkI5K2.js";import{T as W}from"./Tooltip-CcoS3c4T.js";import{L as C}from"./Line-BfeaFnBY.js";import{C as X}from"./Curve-XL3ybND_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CHpCBz4P.js";import"./RechartsWrapper-CLkKKSWb.js";import"./axisSelectors-BfF4ImUe.js";import"./throttle-DA2J31XT.js";import"./index-BbxbGDW7.js";import"./index-CRdNX2-K.js";import"./d3-scale-er3AEJAE.js";import"./index-B-hyiig3.js";import"./index-JtUUyrZR.js";import"./renderedTicksSlice-BMpJvFdR.js";import"./index-C8Xv27VY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BSz7TA42.js";import"./chartDataContext-BAAQoJGX.js";import"./CategoricalChart-DuqmwY6B.js";import"./CartesianAxis-DTwSBZEB.js";import"./Layer-D6WM8pRX.js";import"./Text-Dsq3-wjY.js";import"./pageBackground-CKNOMxYJ.js";import"./useId-rjEqgZ2X.js";import"./useBackwardsCompatibleTheme-Bh5QeLej.js";import"./Label-COoLstIf.js";import"./ZIndexLayer-Dn2bo3WS.js";import"./types-CKK75Clx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-ptZJXXcr.js";import"./symbol-m8ordAaR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cbe50vsH.js";import"./uniqBy-CMc1aoPt.js";import"./iteratee-mBcul4dm.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Eb1qMFFs.js";import"./Cross-eg_rGi3i.js";import"./Rectangle-C6Hc5hiS.js";import"./util-Dxo8gN5i.js";import"./Sector-D5lUlDQq.js";import"./activeStyles-BfHlsJSZ.js";import"./dataEntryStyles-y-eKYJRz.js";import"./ActivePoints-DAIZAef7.js";import"./Dot-D8BQdXw6.js";import"./ErrorBarContext-BhJCUijj.js";import"./GraphicalItemClipPath-iEKWMFl6.js";import"./SetGraphicalItem-DS-LfVWp.js";import"./getRadiusAndStrokeWidthFromDot-CEOY72lw.js";import"./ActiveShapeUtils-Dfohsprr.js";import"./useEffectiveDataKey-BUx5XxQj.js";import"./step-BKPm417p.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
