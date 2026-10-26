import{R as t}from"./iframe-CatpbanJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BZ1k9Ood.js";import{R as h}from"./zIndexSlice-BMWzHmEu.js";import{L as A}from"./LineChart-rzrM-JjO.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-hnosjuGP.js";import{X as f}from"./XAxis-D8aO7K4u.js";import{L as E}from"./Legend-C4LGK5gX.js";import{L as i}from"./Line-Dd-G5LHq.js";import{T as v}from"./Tooltip-DNYEcnB4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CA5ryIJW.js";import"./Text-CG59Fli3.js";import"./resolveDefaultProps-BADc_Fld.js";import"./pageBackground-CULGASio.js";import"./useId-pkbKCVvH.js";import"./ZIndexLayer-ga9SMmxW.js";import"./index-EESjRsqH.js";import"./index-CWnngu7Y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BGfelowG.js";import"./throttle-CW9K2jjI.js";import"./dataEntryStyles-DxsZOfoL.js";import"./axisSelectors-ByEpyZG7.js";import"./d3-scale-DWpKPZRY.js";import"./CartesianAxis-D1ZUqzID.js";import"./Layer-ElswMSOx.js";import"./types-BWsJ_4qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BgMwh8Is.js";import"./index-BeMb0fJc.js";import"./index-BmXPv5ws.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DLFC9k-P.js";import"./index-B_5mHYiA.js";import"./CartesianChart-DPS34irs.js";import"./chartDataContext-CYe6eIs4.js";import"./CategoricalChart-C1P-_dY1.js";import"./Symbols-DFruy8Se.js";import"./symbol-DvaRjft0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-N652NpPr.js";import"./uniqBy-CMP_GnVX.js";import"./iteratee-d_6xpuw1.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CPjpKaHf.js";import"./step-uDZ4fNKk.js";import"./activeStyles-RllIEBru.js";import"./useAnimationId-BwwRxKkz.js";import"./ActivePoints-Neb4G9yW.js";import"./Dot-CO3qiad8.js";import"./RegisterGraphicalItemId-DvaseCYm.js";import"./ErrorBarContext-CxZNMZBW.js";import"./SetGraphicalItem-Csb9S6BZ.js";import"./getRadiusAndStrokeWidthFromDot-CAu9psjm.js";import"./ActiveShapeUtils-MJJt-1xu.js";import"./useEffectiveDataKey-YwyUQgbT.js";import"./Cross-D0i554_n.js";import"./Rectangle-DPp-8w2u.js";import"./util-Dxo8gN5i.js";import"./Sector-DyIsjjrt.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
