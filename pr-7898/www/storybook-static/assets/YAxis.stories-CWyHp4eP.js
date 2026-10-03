import{R as t}from"./iframe-C2y7-rH2.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B28w59_W.js";import{R as h}from"./zIndexSlice-BQPOy7As.js";import{L as A}from"./LineChart-pYMyUpsP.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CoBayb9K.js";import{X as f}from"./XAxis-BRv-fAhZ.js";import{L as E}from"./Legend-Bz20O50v.js";import{L as i}from"./Line-DB6VwbSy.js";import{T as v}from"./Tooltip-DjLxwRTA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CSUQJf-z.js";import"./Text-Dg2YZl1D.js";import"./resolveDefaultProps-vPK17mKC.js";import"./DOMUtils-CYVmP7ld.js";import"./isWellBehavedNumber-6_l4g7Xi.js";import"./useId-rIBzQY0F.js";import"./useBackwardsCompatibleTheme-xd8BeFgY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cqkx5XlC.js";import"./index-Bz54eCtj.js";import"./index-ChrJmNNe.js";import"./RechartsWrapper-BcfYPaoe.js";import"./axisSelectors-Bw0Qwigf.js";import"./throttle-BDe4zlG9.js";import"./d3-scale-D07iQYqn.js";import"./index-DyeRA5Td.js";import"./index-OvZqyYfZ.js";import"./renderedTicksSlice-DVIPHfrA.js";import"./index-DN97KnNV.js";import"./CartesianAxis-DwUPIt0X.js";import"./Layer-Y5hBKOyR.js";import"./types-DDulV5vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1na8-qP.js";import"./chartDataContext-ClTM7zwW.js";import"./CategoricalChart-BgXqKpLI.js";import"./Symbols-D5N7fhe9.js";import"./symbol-BfZZVleY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kO2xZAmN.js";import"./uniqBy-Cquckdt6.js";import"./iteratee-CbQmO-Fp.js";import"./Curve-Bc1dsSwG.js";import"./step-CDQ_m3Wy.js";import"./AnimatedItems-CrKX7S12.js";import"./useAnimationId-BlRPNYZD.js";import"./ActivePoints-DOuEp3Ot.js";import"./Dot-Di-XdVIz.js";import"./RegisterGraphicalItemId-CD4HP7HF.js";import"./ErrorBarContext-J0sVh-nS.js";import"./GraphicalItemClipPath-SSZXiCnp.js";import"./SetGraphicalItem-B36qE1ly.js";import"./getRadiusAndStrokeWidthFromDot-AXkwLV7A.js";import"./ActiveShapeUtils-CXM-saMn.js";import"./useGraphicalItemIdentity-B5eIfUAt.js";import"./Cross-Bw1RGGbC.js";import"./Rectangle-X3oIIIHx.js";import"./util-Dxo8gN5i.js";import"./Sector-BnOOyIft.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
