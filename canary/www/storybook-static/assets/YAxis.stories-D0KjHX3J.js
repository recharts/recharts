import{R as t}from"./iframe-CeCOqiJm.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-A7bYD_ch.js";import{R as h}from"./zIndexSlice-DdaMb5XG.js";import{L as A}from"./LineChart-DaRNR3kd.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-U2exIhj8.js";import{X as f}from"./XAxis-C64KB_q-.js";import{L as E}from"./Legend-NBKfN6k5.js";import{L as i}from"./Line-C5ZRb_5H.js";import{T as v}from"./Tooltip-B4kC64qA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Xd_rxrmK.js";import"./Text-DDswsbtv.js";import"./resolveDefaultProps-CkuoYXav.js";import"./DOMUtils-BCUi_GUC.js";import"./isWellBehavedNumber-B7aD_M3c.js";import"./useId-Bah-b0hR.js";import"./useBackwardsCompatibleTheme-C_9NEiLi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQtw6wpF.js";import"./index-B9TMiPeS.js";import"./index-Dpi_zLnO.js";import"./RechartsWrapper-DkI5rWg4.js";import"./axisSelectors-DY_V65z5.js";import"./throttle-Bex5NkUv.js";import"./d3-scale-Cd6mqy1G.js";import"./index-D0EsppEB.js";import"./index-DrQMD2ku.js";import"./renderedTicksSlice-Bncz9dIB.js";import"./index-DRO0vfdx.js";import"./CartesianAxis-VCLAEQIg.js";import"./Layer-DpcMSheP.js";import"./types-m_9hz0N1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DsDUvZ6B.js";import"./chartDataContext-CJlR_4xR.js";import"./CategoricalChart-DiPqSwwe.js";import"./Symbols-DQqX5H-U.js";import"./symbol-DkOFKYHt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CZclPecY.js";import"./uniqBy-BFlog4hA.js";import"./iteratee-DngjopU3.js";import"./Curve-ig6Db0bN.js";import"./step-D1fpC4Ci.js";import"./AnimatedItems-Di-68duO.js";import"./useAnimationId-CPtx5Z6n.js";import"./ActivePoints-BK3_tt-0.js";import"./Dot-DoByF9sv.js";import"./RegisterGraphicalItemId-BNFTgn8t.js";import"./ErrorBarContext-C_Gf5gdw.js";import"./GraphicalItemClipPath-CNDfJ_fQ.js";import"./SetGraphicalItem-DcgFqiOy.js";import"./getRadiusAndStrokeWidthFromDot-r7hnUPNX.js";import"./ActiveShapeUtils-FS6Mn2Zl.js";import"./useGraphicalItemIdentity-BZQpyUJc.js";import"./Cross-BSxKHq8j.js";import"./Rectangle-Td5JxEu-.js";import"./util-Dxo8gN5i.js";import"./Sector-CiPHfOJS.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
