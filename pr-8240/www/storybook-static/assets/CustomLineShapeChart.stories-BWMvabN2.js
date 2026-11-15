import{R as t}from"./iframe-nQqwH7QJ.js";import{R as D,l as p}from"./zIndexSlice-36iharMl.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Cxw-NT0H.js";import{C as M}from"./CartesianGrid-qJA-wHLs.js";import{X as $}from"./XAxis-CJ63RViA.js";import{Y as I}from"./YAxis-CBsB2GS9.js";import{L as O}from"./Legend-DMbRoFU-.js";import{T as W}from"./Tooltip-BjxfiNg_.js";import{L as f}from"./Line-qqwSMB27.js";import{C as X}from"./Curve-CGPupWIw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-sxdLwWpt.js";import"./throttle-B0HUB5U4.js";import"./index-oe7CujVI.js";import"./index-II4F3WAY.js";import"./RechartsWrapper-CIP5uBJJ.js";import"./axisSelectors-Dnfm47Aa.js";import"./polarAxisSelectors-DDvt0jLt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CE_Y-rH6.js";import"./index-BNIQZt4j.js";import"./index-D3qCcLe1.js";import"./renderedTicksSlice-5pmkjT89.js";import"./index-Im8qdnHn.js";import"./fillDefinitions-ZO6Wo39I.js";import"./CartesianChart-CIqAWzMx.js";import"./chartDataContext-CFytY-UH.js";import"./CategoricalChart-D4LSu4XN.js";import"./CartesianAxis-DQ3vG01G.js";import"./Layer-Bx429Rld.js";import"./Text-1TJRO8Pn.js";import"./ZIndexLayer-uBy8TOlo.js";import"./Label--FIUnsrD.js";import"./types-jTE1kqYu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BWEY_vml.js";import"./symbol-t7fE5m4B.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BMJszRZD.js";import"./uniqBy-rfJhXBOv.js";import"./iteratee-C4T-0Dkz.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BDVyTCS1.js";import"./Cross-CaQX_rVb.js";import"./Rectangle-adiPADn5.js";import"./util-Dxo8gN5i.js";import"./Sector-BYDhkgQE.js";import"./dataEntryStyles-D2Yj78tL.js";import"./ActivePoints-BO92Iyzv.js";import"./Dot-BPCTuswq.js";import"./activeStyles-DbesfPTr.js";import"./ErrorBarContext-CKcJf7fb.js";import"./SetGraphicalItem-BquQie6d.js";import"./getRadiusAndStrokeWidthFromDot-rJ-p2Gf9.js";import"./ActiveShapeUtils-C7OOt6yj.js";import"./useEffectiveDataKey-C12iG63u.js";import"./step-BhHvwrte.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
