import{R as t}from"./iframe-qOFEdJsq.js";import{R as D,l as p}from"./zIndexSlice-4ZilFo_n.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Dl529CfE.js";import{C as M}from"./CartesianGrid-BF4MkUzS.js";import{X as $}from"./XAxis-BLPVblQP.js";import{Y as I}from"./YAxis-W_URYSZS.js";import{L as O}from"./Legend-D_RLPDIv.js";import{T as W}from"./Tooltip-DXk_gFAc.js";import{L as f}from"./Line-DRa6L9kk.js";import{C as X}from"./Curve-DB3f0x8T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./throttle-Bx7bNNV1.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./RechartsWrapper-BNMPtHnU.js";import"./axisSelectors-CB4lGYL3.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjhRaU2.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./CartesianAxis-B9ZixuFu.js";import"./Layer-p7tl0Obh.js";import"./Text-D4Or0m3K.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./Label-Cllq2PGv.js";import"./types-vee7x0Qx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-C8MPZPAo.js";import"./Symbols-DU4y3lGd.js";import"./symbol-Cc7ZDpSQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DVIKzI6S.js";import"./uniqBy-Bo2q91U8.js";import"./iteratee-bC8XKX9j.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DRvHP31x.js";import"./Cross-B7ynVVFH.js";import"./Rectangle-BIPq25kq.js";import"./util-Dxo8gN5i.js";import"./Sector-CAtsCAlR.js";import"./LabelList-CNqM2k92.js";import"./ActivePoints-B9VIFtI9.js";import"./Dot-Cx_dxYvu.js";import"./activeStyles-B7bZlFHp.js";import"./dataEntryStyles-BpwMOC9F.js";import"./ErrorBarContext-CScUCP7Y.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getRadiusAndStrokeWidthFromDot-B-7643QY.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./useEffectiveDataKey-Y8Iowmfi.js";import"./step-5jiFn3Gv.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
