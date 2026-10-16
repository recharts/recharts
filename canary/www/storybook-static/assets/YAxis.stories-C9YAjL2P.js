import{R as t}from"./iframe-Cuc-3wmn.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-D3vkb_pr.js";import{R as h}from"./zIndexSlice-BsVN3Oy1.js";import{L as A}from"./LineChart-YbH0Pldq.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Bym8S3Fv.js";import{X as f}from"./XAxis-BqOzDVbT.js";import{L as E}from"./Legend-BR4IrO2g.js";import{L as i}from"./Line-AdV0akim.js";import{T as v}from"./Tooltip-BOZ61CcI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CIwD5k1e.js";import"./Text-BXtcMZ2N.js";import"./resolveDefaultProps-DeE8fKkX.js";import"./pageBackground-DrpZqn_y.js";import"./isWellBehavedNumber-BQdzkgjM.js";import"./useId-CpeFYMDs.js";import"./useBackwardsCompatibleTheme-Cg1iNggS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LfSwjZQ4.js";import"./index-Dr1iXWUa.js";import"./index-DGxMJQlb.js";import"./axisSelectors-DM_2WB9O.js";import"./throttle-BHv1OzUd.js";import"./d3-scale-BS_R9TF_.js";import"./CartesianAxis-D_D6u5e-.js";import"./Layer-D8rIily6.js";import"./types-GMU9tJsf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BXySsU0c.js";import"./index-Dz3k4zem.js";import"./index-Do_NM7xQ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-3cu-hXPY.js";import"./index-CYT75Ewh.js";import"./CartesianChart-C6H_Qcxl.js";import"./chartDataContext-B7_SZBh7.js";import"./CategoricalChart-DrO7g7YL.js";import"./Symbols-DK1QeJ4B.js";import"./symbol-DzBkfLCR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWSWPlh_.js";import"./uniqBy-miHMS1-h.js";import"./iteratee-DHIVVYG7.js";import"./Curve-DkDc-div.js";import"./step-DLRB17DG.js";import"./activeStyles-CdxeGYpW.js";import"./useAnimationId-BpVC87C1.js";import"./dataEntryStyles-BJ1Gca6t.js";import"./ActivePoints-CVhx80tt.js";import"./Dot-DyPF6Lbp.js";import"./ErrorBarContext-DdAUPC4x.js";import"./GraphicalItemClipPath-SJq0vZIV.js";import"./SetGraphicalItem-CaNq7kdy.js";import"./getRadiusAndStrokeWidthFromDot-iwqqPDMx.js";import"./ActiveShapeUtils-CkArj8ub.js";import"./useEffectiveDataKey-rVy1qnot.js";import"./Cross-Bh1B-flk.js";import"./Rectangle-jrOmvPnS.js";import"./util-Dxo8gN5i.js";import"./Sector-wjDHcoKV.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
