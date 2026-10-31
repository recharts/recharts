import{R as t}from"./iframe-DrMLBoK_.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-T-2mqgRO.js";import{R as h}from"./zIndexSlice-BAbfq_sX.js";import{L as A}from"./LineChart-QGHfPOo8.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-rjxjRRy0.js";import{X as f}from"./XAxis-Cwv8s30V.js";import{L as E}from"./Legend-BPFKtS9p.js";import{L as i}from"./Line-z8Hwxd3e.js";import{T as v}from"./Tooltip-DLFB31JE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CJPkFebi.js";import"./Text-CCAk-006.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2k-junf.js";import"./throttle-2Z3dikKo.js";import"./axisSelectors-CrOsHKKG.js";import"./d3-scale-BHx6I7KL.js";import"./CartesianAxis-CAiEG9fo.js";import"./Layer-DCQ6NbAd.js";import"./types-CTebeEOM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CXZPsywz.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-BVUslZbl.js";import"./symbol-DCFwQ7z8.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DS33QVkf.js";import"./useElementOffset-DSzIxfUE.js";import"./uniqBy-Wo4a7xMg.js";import"./iteratee-C7O8kT_z.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CDb7Uz9B.js";import"./step-LAZCFOYn.js";import"./LabelList-UL5cxJwa.js";import"./ActivePoints-BqSYU_4H.js";import"./Dot-m22IE0o6.js";import"./activeStyles-CN6y9IyH.js";import"./useAnimationId-C1T3lckw.js";import"./ErrorBarContext-BbnyXFhx.js";import"./SetGraphicalItem-u5R4LaUm.js";import"./getRadiusAndStrokeWidthFromDot-e3lSPE0u.js";import"./ActiveShapeUtils-BLsOucL8.js";import"./useEffectiveDataKey-Cmfpsn2Q.js";import"./Cross-PCIn7ixO.js";import"./Rectangle-CtabDI_D.js";import"./util-Dxo8gN5i.js";import"./Sector-CAabEh96.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
