import{e as t}from"./iframe-CUlKjRv5.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-CKyv_Ble.js";import{g as h}from"./arrayEqualityCheck-DBgCs58d.js";import{L as A}from"./LineChart-oDChAur2.js";import{a as b}from"./Coordinate-CcdTesrj.js";import{C as f}from"./CartesianGrid-Thm5ek-6.js";import{X as x}from"./XAxis-CO_kz_i5.js";import{L as E}from"./Legend-BqAOIfma.js";import{L as n}from"./Line-CA-fClkz.js";import{T as v}from"./Tooltip-CNAuMk0m.js";import{R as k}from"./RechartsHookInspector-DIUnr0hb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BeQQMY3-.js";import"./Layer-BRPUehgK.js";import"./resolveDefaultProps-_1GgMiat.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./Label-CsCoT34Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dzag2pwA.js";import"./zIndexSlice-ygbvIPwo.js";import"./immer-DSTsi-PZ.js";import"./types-cseKagnM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./hooks-CnLCGSHs.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./Symbols-SwNF5E59.js";import"./symbol-ByAU1LjM.js";import"./step-ndBpbuBv.js";import"./useElementOffset-Crgg6g68.js";import"./uniqBy-BeSJAQ9R.js";import"./iteratee-D8Z_DKuL.js";import"./ReactUtils-Dhd-bIVM.js";import"./ActivePoints-CrLAHFM3.js";import"./Dot-Cv9C9-P8.js";import"./RegisterGraphicalItemId-0Us56BlX.js";import"./ErrorBarContext-CXV3xnHJ.js";import"./GraphicalItemClipPath-CUJ2i_OT.js";import"./SetGraphicalItem-DXTqVkON.js";import"./useAnimationId-527k5CUF.js";import"./getRadiusAndStrokeWidthFromDot-CsjgyuMP.js";import"./ActiveShapeUtils-6qGjBTVG.js";import"./isPlainObject-D3iLjTkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BeDuyTKv.js";import"./Trapezoid-Bhuw_sBY.js";import"./Sector-DGUTJhGS.js";import"./Curve-Dj9MPAvc.js";import"./Cross-B6AOWwW3.js";import"./index-CsGwSrdN.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./OffsetShower-CPkU8Ejw.js";import"./PlotAreaShower-BQaO0vts.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
