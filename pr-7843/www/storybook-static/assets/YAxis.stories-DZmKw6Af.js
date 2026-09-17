import{R as t}from"./iframe-DgWro0Cb.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-D4vSwiu5.js";import{R as h}from"./zIndexSlice-kqW7224Y.js";import{L as A}from"./LineChart-CH_YMISU.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BBH-C6Ly.js";import{X as f}from"./XAxis-CkB5HD-K.js";import{L as E}from"./Legend-BRN_aLTq.js";import{L as i}from"./Line-BHp2SfN2.js";import{T as v}from"./Tooltip-Ck6C8jgV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAU1RuQf.js";import"./Text-waGCJknf.js";import"./resolveDefaultProps-BhS12mAV.js";import"./DOMUtils-D88jtPAc.js";import"./isWellBehavedNumber-DwM6ebKF.js";import"./useId-BFsrAK1l.js";import"./useBackwardsCompatibleTheme-VKMGBrP2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpP2thTP.js";import"./index-DztsUb_g.js";import"./index-D3He7cmP.js";import"./RechartsWrapper-h6y9B5zn.js";import"./axisSelectors-CZ13_oVc.js";import"./throttle-BP62aThC.js";import"./d3-scale-BfkfHoGl.js";import"./index-BDglQEHq.js";import"./index-CTaoAsOx.js";import"./renderedTicksSlice-gL8A1NDh.js";import"./index-DaYKny0o.js";import"./CartesianAxis-CA5xaS56.js";import"./Layer-XFlq6LCH.js";import"./types-pVUrsENP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DA39YynM.js";import"./chartDataContext-CGD2iDmQ.js";import"./CategoricalChart-u8OOiycT.js";import"./Symbols-DrEB9F-d.js";import"./symbol-DXkmIxFe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BsSXBjhh.js";import"./uniqBy-PhKVtvXH.js";import"./iteratee-88r513BQ.js";import"./Curve-BxTMDs4y.js";import"./step-JFePqLTA.js";import"./AnimatedItems-DqXJhGnM.js";import"./useAnimationId-NxEFQxZ2.js";import"./ActivePoints-CrJTvJjI.js";import"./Dot-BcllKm9J.js";import"./RegisterGraphicalItemId-9cmkZE1J.js";import"./ErrorBarContext-8rr3nTdF.js";import"./GraphicalItemClipPath-D8FUo4fb.js";import"./SetGraphicalItem-DPr6Abv8.js";import"./getRadiusAndStrokeWidthFromDot-C1GKzwpP.js";import"./ActiveShapeUtils-BxIddtsB.js";import"./useGraphicalItemIdentity-DUrbqVuJ.js";import"./Cross-D31abjDh.js";import"./Rectangle-wXrqsCXj.js";import"./util-Dxo8gN5i.js";import"./Sector-rt7PmnOp.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
