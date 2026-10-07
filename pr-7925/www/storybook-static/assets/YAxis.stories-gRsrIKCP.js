import{R as t}from"./iframe-B-iIRDdh.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-D6Burg2S.js";import{R as h}from"./zIndexSlice-xTQiy-H7.js";import{L as A}from"./LineChart-CCqxC7bJ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DIyhJCQ8.js";import{X as f}from"./XAxis-CndG3lfF.js";import{L as E}from"./Legend-D3wpZrCV.js";import{L as i}from"./Line-Cbj4CeQN.js";import{T as v}from"./Tooltip-CVPacDbw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CwIrwy70.js";import"./Text-CBbsNly8.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./DOMUtils-CixgR7ku.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbH1OgN0.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./RechartsWrapper-3KdvU5vS.js";import"./axisSelectors-C60OKlJ4.js";import"./throttle-DMKMego8.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./CartesianAxis-D-jVFU-k.js";import"./Layer-Dt4jm0MX.js";import"./types-zJ8KfHt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./Symbols-58jLlpI6.js";import"./symbol-BupXd47Z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-HOhbNBcL.js";import"./uniqBy-BjVxXwWp.js";import"./iteratee-Dwz90aEP.js";import"./Curve-CjV9ratN.js";import"./step-CLlPrIoa.js";import"./AnimatedItems-WEAzzrlF.js";import"./useAnimationId-CcMpnWIs.js";import"./ActivePoints-D_regA9J.js";import"./Dot-BnQbbHjv.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./ErrorBarContext-BzZXG9TC.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getRadiusAndStrokeWidthFromDot-PVXVFp_x.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";import"./Cross-bCDAOaXl.js";import"./Rectangle-BOjsrKl9.js";import"./util-Dxo8gN5i.js";import"./Sector-DiKqSUdo.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
