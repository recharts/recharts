import{R as t}from"./iframe-CKMzUQLl.js";import{R as D,l as p}from"./zIndexSlice-COhM5Ssb.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BDcoXcWF.js";import{C as M}from"./CartesianGrid-DeYEEHhQ.js";import{X as $}from"./XAxis-BDBlWxDf.js";import{Y as I}from"./YAxis-DB4YGo7q.js";import{L as O}from"./Legend-BbIVnfVR.js";import{T as W}from"./Tooltip-BT_z6n7f.js";import{L as f}from"./Line-BotpFDCu.js";import{C as X}from"./Curve-B0phiZsH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./throttle-cmQF6pk6.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./RechartsWrapper-bg3MvxI9.js";import"./axisSelectors-BSZ3SCPn.js";import"./polarAxisSelectors-BANjW4O_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uc_I_mt7.js";import"./index-D6eYg-36.js";import"./index-Cl9-JK-G.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./CartesianAxis-BPlDbcHH.js";import"./Layer-VHBsdASS.js";import"./Text-CUuCMSti.js";import"./DOMUtils-CShcNi4q.js";import"./pageBackground-DxYgqm3W.js";import"./ZIndexLayer-B6POVY0e.js";import"./Label-DwblDDwh.js";import"./types-DgiI7KOn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-D5lwwS81.js";import"./Symbols-Bp34LNU2.js";import"./symbol-FynIgkai.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BGehcf2H.js";import"./uniqBy-qDOcKTVS.js";import"./iteratee-DrtJv-M1.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DKuDzs92.js";import"./Cross-IIL7sW25.js";import"./Rectangle-CaGbKQx_.js";import"./util-Dxo8gN5i.js";import"./Sector-BqPv5Kez.js";import"./LabelList-DO8MwQV1.js";import"./ActivePoints-DBk2T96T.js";import"./Dot-Da_BOClg.js";import"./activeStyles-CT0hkTay.js";import"./dataEntryStyles-2pl_sY7K.js";import"./ErrorBarContext-CFogFGPo.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getRadiusAndStrokeWidthFromDot-CkpjOgWX.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./useEffectiveDataKey-3-wTW5Lh.js";import"./step-Wrr8d7OB.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
