import{R as t}from"./iframe-G0Ik9O6t.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CryECj4R.js";import{R as l}from"./zIndexSlice-CYnNRWxE.js";import{C as x}from"./ComposedChart-B4cIjG4K.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BS8jmIY3.js";import{L as a}from"./Line-umGGBS5k.js";import{X as c}from"./XAxis-CWTgMLCK.js";import{T as g}from"./Tooltip-UEHO_gYO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CylpphjQ.js";import"./Text-B4HlcW6K.js";import"./resolveDefaultProps-6jYqE8VH.js";import"./DOMUtils-BLMelfj-.js";import"./ZIndexLayer-rUK8h3YF.js";import"./index-DJn7_RRX.js";import"./index-BSx-eOuX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DbTpX6rz.js";import"./throttle-0RzAOwSl.js";import"./axisSelectors-D9yir6Xs.js";import"./d3-scale-B1oMv4d2.js";import"./CartesianAxis-CcGZ5e89.js";import"./Layer-DsYtJDK_.js";import"./types-D7lN_jRq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DJGvkPcQ.js";import"./index-CZjz2J7d.js";import"./index-CrEwjtpS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0SK3-tY.js";import"./index-yaYz5_hL.js";import"./fillDefinitions-DtfSekMJ.js";import"./CartesianChart-D9yJCYyl.js";import"./ZIndexPortal-DXabDpK4.js";import"./CategoricalChart-62rauA-s.js";import"./LabelList-Bc94H-h2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BekZI2Ti.js";import"./useAnimationId-BSSTqixR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BT1ALZoA.js";import"./tooltipContext-9zcdWQEa.js";import"./dataEntryStyles-C4cqIMlE.js";import"./ErrorBarContext-BMXI6Vn7.js";import"./activeStyles-BHukLnjd.js";import"./SetGraphicalItem-CbwdoUqN.js";import"./getZIndexFromUnknown-DJRGehp7.js";import"./useEffectiveDataKey-DGTKBWN-.js";import"./omit-DU67DOH4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BM_Sw2Bx.js";import"./step-CKk5L9t9.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DtZW7fDP.js";import"./Dot-CCKVvK0p.js";import"./Symbols-DuXBDnMk.js";import"./symbol-D_Su1EIX.js";import"./getRadiusAndStrokeWidthFromDot-BGcbbY8R.js";import"./useElementOffset-Cix9UpUK.js";import"./uniqBy-CkgI_JIc.js";import"./iteratee-lKPQ2sEZ.js";import"./Cross-BC0HZx5f.js";import"./Sector-23XJgAX_.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
