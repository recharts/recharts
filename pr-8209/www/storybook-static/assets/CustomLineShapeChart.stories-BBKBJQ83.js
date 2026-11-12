import{R as t}from"./iframe-Ct1svimm.js";import{R as D,l as p}from"./zIndexSlice-DuTNyMvu.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Dym3a83m.js";import{C as M}from"./CartesianGrid-Xmo33PVK.js";import{X as $}from"./XAxis-DQtY80zm.js";import{Y as I}from"./YAxis-DJ-mdmri.js";import{L as O}from"./Legend-Bd6FU5Xr.js";import{T as W}from"./Tooltip-DCv6Ofun.js";import{L as f}from"./Line-C_BZS029.js";import{C as X}from"./Curve-D34yK1QN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./throttle-pNdBRgo_.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./RechartsWrapper-D0VQQHcg.js";import"./axisSelectors-CIwgaX7y.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BL9MDqqK.js";import"./index-LDd6dT7n.js";import"./index-CGKMaXkl.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./CartesianAxis-D0Zofcf0.js";import"./Layer-CbeDBXuD.js";import"./Text-VSzLHfPE.js";import"./ZIndexLayer-BltRI-Nr.js";import"./Label-B2Mk85O5.js";import"./types-EANqWthO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bnfs-9ht.js";import"./symbol-CiSLDvHg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CY9fcLag.js";import"./uniqBy-BMmxp9UC.js";import"./iteratee-BWHT356U.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CDKCdXQz.js";import"./Cross-B8pnqaKp.js";import"./Rectangle-sIigVXDT.js";import"./util-Dxo8gN5i.js";import"./Sector-DTuMi1n9.js";import"./dataEntryStyles-CHH9ur-w.js";import"./ActivePoints-Bj7-j5Zz.js";import"./Dot-CCM7dYWU.js";import"./activeStyles-DWgBPDlx.js";import"./ErrorBarContext-CQBLFEFh.js";import"./SetGraphicalItem-inprgaSw.js";import"./getRadiusAndStrokeWidthFromDot-B2vi1B3A.js";import"./ActiveShapeUtils-BuOJWJdn.js";import"./useEffectiveDataKey-CW73rX9I.js";import"./step-Cz5QOKdQ.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
