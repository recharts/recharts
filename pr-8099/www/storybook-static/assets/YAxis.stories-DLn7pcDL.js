import{R as t}from"./iframe-D0yOAL3n.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-ClNwS6nX.js";import{R as h}from"./zIndexSlice-Dn2Ys6gV.js";import{L as A}from"./LineChart-C6NNLH-m.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DQSXKhES.js";import{X as f}from"./XAxis-ntZPF60e.js";import{L as E}from"./Legend-DPhxLnRv.js";import{L as i}from"./Line-CO6xWWXS.js";import{T as v}from"./Tooltip-DEMLV3mW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BzBQuB2T.js";import"./Text-z-sERxAx.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./throttle-BrS_cZCp.js";import"./dataEntryStyles-BNyFarFk.js";import"./axisSelectors-DATXyQCy.js";import"./d3-scale-n2sBsRY0.js";import"./CartesianAxis-dbcozJzz.js";import"./Layer-CY7a4PGZ.js";import"./types-IRHz2iGt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwTnzypz.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./Symbols-BGu4wd_L.js";import"./symbol-C_vPW6X7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CIhlqtry.js";import"./uniqBy-UFr_nm2i.js";import"./iteratee-DStnvH7g.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DzBXGra2.js";import"./step-C1lWuIkW.js";import"./LabelList-CZmttjyK.js";import"./ActivePoints-BljR9_g2.js";import"./Dot-lux40cEN.js";import"./activeStyles-BHH3u2ze.js";import"./useAnimationId-CKYg8A0e.js";import"./RegisterGraphicalItemId-DVCLPf9f.js";import"./ErrorBarContext-Dnk3UGdS.js";import"./SetGraphicalItem-Co3HUPOs.js";import"./getRadiusAndStrokeWidthFromDot-DLGQUjjw.js";import"./ActiveShapeUtils-CLWTEHLV.js";import"./useEffectiveDataKey-DqoTIDte.js";import"./Cross-DOgmqpkJ.js";import"./Rectangle-hiMsXewW.js";import"./util-Dxo8gN5i.js";import"./Sector-CYfHmUnD.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
