import{e as t}from"./iframe-C_RKSEYG.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwQ9PO5l.js";import{Y as s}from"./YAxis-Dw1AfdQf.js";import{R as h}from"./arrayEqualityCheck-XhN9n2BV.js";import{L as A}from"./LineChart-BpVoiMS4.js";import{C as f}from"./CartesianGrid-4JwPmv1I.js";import{X as x}from"./XAxis-3q4SInU2.js";import{L as E}from"./Legend-0q0gcXTg.js";import{L as n}from"./Line-CObjJQTD.js";import{T as v}from"./Tooltip-siVcffEm.js";import{R as k}from"./RechartsHookInspector-2DLThljJ.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Q9iq7WI3.js";import"./Layer-Bdbbvous.js";import"./resolveDefaultProps-wWOI_tEY.js";import"./Text-DZ8oBtno.js";import"./DOMUtils-D3avAUhw.js";import"./Label-DjnSNkR5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C2eZ7492.js";import"./zIndexSlice-Dau3iHk3.js";import"./immer-BXvw-sb6.js";import"./types-DsqucEgb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BsnvkrRv.js";import"./hooks-BUBBsNP0.js";import"./axisSelectors-octxjJ6L.js";import"./d3-scale-Bly9GB_U.js";import"./RechartsWrapper-DJ6mrGyY.js";import"./index-BRt1FalZ.js";import"./CartesianChart-Dpt-Gkc_.js";import"./chartDataContext-Dj8ePN8G.js";import"./CategoricalChart-BeDTe7Ft.js";import"./Symbols-D-Mqycxx.js";import"./symbol-CQ2DdqBk.js";import"./step-CZqcHwF_.js";import"./useElementOffset-UIzr0A2v.js";import"./uniqBy-BK5HoLxp.js";import"./iteratee-Dn6k9_7E.js";import"./ReactUtils-CN-zxxkn.js";import"./ActivePoints-CR4cquNR.js";import"./Dot-DdhwcviA.js";import"./RegisterGraphicalItemId-BrlGhgM7.js";import"./ErrorBarContext-B6LOYifa.js";import"./GraphicalItemClipPath-mtAKD-sR.js";import"./SetGraphicalItem-DAHF2TwR.js";import"./useAnimationId-A_rRmY4T.js";import"./getRadiusAndStrokeWidthFromDot-wxvSaUa-.js";import"./ActiveShapeUtils-DCdigpXF.js";import"./isPlainObject-DUDNoV38.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR00ZYjW.js";import"./Trapezoid-BcY_848k.js";import"./Sector-C6nUzz_C.js";import"./Curve-C9iWhVEb.js";import"./Cross-DVB_poyJ.js";import"./index-CYNR1kH5.js";import"./ChartSizeDimensions-Du4NUIhU.js";import"./OffsetShower-B118pl0X.js";import"./PlotAreaShower-BicDzRP-.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
