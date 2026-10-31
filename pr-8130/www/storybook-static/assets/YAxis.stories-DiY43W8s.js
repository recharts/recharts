import{R as t}from"./iframe-BcoARvhY.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BR79w2P2.js";import{R as h}from"./zIndexSlice-Cap7bOGW.js";import{L as A}from"./LineChart-p5RsXGOs.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Dqts8x-j.js";import{X as f}from"./XAxis-CW4XRUun.js";import{L as E}from"./Legend-aU5mImzU.js";import{L as i}from"./Line-DWyUakfU.js";import{T as v}from"./Tooltip-4lPV6aA7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db4oLrbv.js";import"./Text-DEB5NFXE.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./throttle-DozmwBSC.js";import"./axisSelectors-CF6rFxXt.js";import"./d3-scale-BLsEuD7O.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cwmh20d2.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./isArguments-yB-y1yaH.js";import"./Curve-hSwQe_mn.js";import"./step-BV4gh9k1.js";import"./LabelList-DqQuwlzD.js";import"./ActivePoints-qZlMEdOF.js";import"./Dot-CeoPT2zv.js";import"./activeStyles-Bdk5Xw9p.js";import"./useAnimationId-DZvEuqRY.js";import"./dataEntryStyles-oli1U5SG.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./getRadiusAndStrokeWidthFromDot-DIgm2Flo.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./Cross-BYGgjkzq.js";import"./Rectangle-C_t9hqFj.js";import"./util-Dxo8gN5i.js";import"./Sector-DAFfY2-U.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
