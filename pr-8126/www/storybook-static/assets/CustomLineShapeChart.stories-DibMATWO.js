import{R as t}from"./iframe-CpWBjTvp.js";import{R as D,l as p}from"./zIndexSlice-DUDjamRK.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BDak5HB9.js";import{C as M}from"./CartesianGrid-C8RHDb5i.js";import{X as $}from"./XAxis-WebSLI5n.js";import{Y as I}from"./YAxis-3eU4T95U.js";import{L as O}from"./Legend-DfE89ulZ.js";import{T as W}from"./Tooltip-pr3HU5Xv.js";import{L as f}from"./Line-P1M0af3R.js";import{C as X}from"./Curve-DzwEiiyx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-NIjw2OgC.js";import"./throttle-D3Uoll6g.js";import"./index-BsKHwb8S.js";import"./index-BEj8e0rp.js";import"./RechartsWrapper-DxDmVade.js";import"./axisSelectors-DP-Cq8x3.js";import"./polarAxisSelectors-Cbbt3MrT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9EE4QQRc.js";import"./index-BKdflUfl.js";import"./index-mAc_XfwU.js";import"./renderedTicksSlice-DvLiRaDl.js";import"./index-xtKZJIPQ.js";import"./CartesianChart-2SX8QMEH.js";import"./ZIndexPortal-D23JLhQd.js";import"./CategoricalChart-tOUFzxMq.js";import"./CartesianAxis-CgwFl8Jq.js";import"./Layer-DcRKRX6x.js";import"./Text-BafsCBcm.js";import"./pageBackground-CKOzv8y-.js";import"./ZIndexLayer-BbGGEaTO.js";import"./Label-BHRweOLu.js";import"./types-BKpcX7F2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D-1GfXlL.js";import"./symbol-C1ODNnyl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BB9lz8UY.js";import"./uniqBy-BEMNrNmR.js";import"./iteratee-NM3yHH-L.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-qe3YUtTg.js";import"./Cross-CJ1zLrh7.js";import"./Rectangle-DrAVfzV4.js";import"./util-Dxo8gN5i.js";import"./Sector-cqrvmsip.js";import"./LabelList-B0vE2GKD.js";import"./ActivePoints-CWRCwq-4.js";import"./Dot-D1fFPcbO.js";import"./activeStyles-CPrr7d0w.js";import"./dataEntryStyles-BMyxGDVI.js";import"./ErrorBarContext-Bmj1TjNN.js";import"./SetGraphicalItem-Bf14-AlA.js";import"./getRadiusAndStrokeWidthFromDot-BkVlgOSF.js";import"./ActiveShapeUtils-DpSDZTd0.js";import"./useEffectiveDataKey-CmhiZ1Bu.js";import"./step-D2PoiFak.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Jt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
