import{R as t}from"./iframe-C2FiVbx6.js";import{R as D,l as p}from"./zIndexSlice-CIwOLMY2.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B-pDfouS.js";import{C as M}from"./CartesianGrid-D1Z1SWnN.js";import{X as $}from"./XAxis-BpwUAM2i.js";import{Y as I}from"./YAxis-H-bG_GIE.js";import{L as O}from"./Legend-CeXqnuvF.js";import{T as W}from"./Tooltip-BAhkDjqS.js";import{L as f}from"./Line-S0l6mAcw.js";import{C as X}from"./Curve-r64DCwYW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./throttle-Cf_mfeUw.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./RechartsWrapper-CzRJf9wd.js";import"./axisSelectors-DzJ8Skeq.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dmh-LY51.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./CartesianAxis-LjFWWnk2.js";import"./Layer-BbCOnDJZ.js";import"./Text-DUuV2-iR.js";import"./ZIndexLayer-CyqrJVrU.js";import"./Label-oSfspIu2.js";import"./types-CTWOnDaX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D3G4ac0V.js";import"./symbol-By85hRRg.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D2fgVs1p.js";import"./uniqBy-83-1iH4D.js";import"./iteratee-D1g8o1KX.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DeWO3OMz.js";import"./Cross-2MxY5Dn8.js";import"./Rectangle-COqz7K3J.js";import"./util-Dxo8gN5i.js";import"./Sector-CeBdb2pY.js";import"./getRadiusAndStrokeWidthFromDot-0SqF3Wbd.js";import"./dataEntryStyles-Cr8Jhwhl.js";import"./ActivePoints-BoBRdB0i.js";import"./Dot-CKxlSMqI.js";import"./activeStyles-Cz6uJME2.js";import"./ErrorBarContext-Bl0bf3v5.js";import"./SetGraphicalItem-CdikQP2n.js";import"./ActiveShapeUtils-xS0QhUpf.js";import"./useEffectiveDataKey-pHEaOl4p.js";import"./step-CFQC-oeW.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
