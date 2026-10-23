import{R as t}from"./iframe-DWz-Q7D1.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis--VjP9Ce5.js";import{R as h}from"./zIndexSlice-D4KjIdsO.js";import{L as A}from"./LineChart-Dcmc61bT.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BoGhBG8e.js";import{X as f}from"./XAxis-BZUBECrT.js";import{L as E}from"./Legend-Qa9ER7mO.js";import{L as i}from"./Line-DmDKrJpN.js";import{T as v}from"./Tooltip-Dgb3DMOC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DNBocu_e.js";import"./Text-Rsbaz2Nf.js";import"./resolveDefaultProps-CzYzgORH.js";import"./pageBackground-Bn_EUSju.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./axisSelectors-Ce2rWziX.js";import"./throttle-CiqOC1ip.js";import"./d3-scale-B1h-c6nn.js";import"./CartesianAxis-k4k8wY80.js";import"./Layer-0LCA68q2.js";import"./types-d8BMRC9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DTtBamZ0.js";import"./index-DXyt1obU.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./Symbols-DAD2-yw9.js";import"./symbol-DMsHYeeh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cl4JXsdE.js";import"./uniqBy-CSEyWmCH.js";import"./iteratee-D2MvuXn3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-57G7mADL.js";import"./step-CnBlCK_d.js";import"./activeStyles-cBdGFM1d.js";import"./useAnimationId-wagxbO9A.js";import"./dataEntryStyles-B5o6jV-U.js";import"./ActivePoints-BA6UWnZF.js";import"./Dot-DC9IrQq5.js";import"./ErrorBarContext-C2fYo0Zq.js";import"./GraphicalItemClipPath-CSYE-jHD.js";import"./SetGraphicalItem-D_zovdlO.js";import"./getRadiusAndStrokeWidthFromDot-Dqmrd8D2.js";import"./ActiveShapeUtils-C6nNN6Qs.js";import"./useEffectiveDataKey-kfwO5Jnl.js";import"./Cross-CrN7AVkN.js";import"./Rectangle-04QXIjXf.js";import"./util-Dxo8gN5i.js";import"./Sector-C8W6elIw.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
