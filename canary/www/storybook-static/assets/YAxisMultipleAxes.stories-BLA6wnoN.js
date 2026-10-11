import{R as t}from"./iframe-DUGvLzaM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BJE0EUN2.js";import{R as l}from"./zIndexSlice-B4Mogj2z.js";import{C as x}from"./ComposedChart-cwP5-Ry_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B4QSME-j.js";import{L as a}from"./Line-BoA-LB1U.js";import{X as c}from"./XAxis-D-RL7BSf.js";import{T as g}from"./Tooltip-gOfCJt26.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C6rBfDHi.js";import"./Text-DzH8Q7Re.js";import"./resolveDefaultProps-B6fFLtp3.js";import"./pageBackground-9CWG-5EI.js";import"./isWellBehavedNumber-Dz-qkofC.js";import"./useId-Bo2C_hQY.js";import"./useBackwardsCompatibleTheme-Dm759DN1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ytkVOhJ8.js";import"./index-Bf1ebX0Z.js";import"./index-D4rZIo04.js";import"./RechartsWrapper-Ba1hxoNM.js";import"./axisSelectors-CGc2s0Fh.js";import"./throttle-iBva9Xri.js";import"./d3-scale-C86sab-h.js";import"./index-CmYddVJ2.js";import"./index-CwW47wP2.js";import"./renderedTicksSlice-CrtrmLXp.js";import"./index-C-yXSHy-.js";import"./CartesianAxis-FW2HtnAK.js";import"./Layer-C-Z-OoWn.js";import"./types-CAM6k8hf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CoHpfyp6.js";import"./chartDataContext-DrEWUsQF.js";import"./CategoricalChart-W5cmFX3l.js";import"./activeStyles-DDiORVPn.js";import"./useAnimationId-FtVQIfuZ.js";import"./dataEntryStyles-DRqvsfnl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-UuI_l8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYHb3Hz-.js";import"./tooltipContext-CiW5l7a0.js";import"./ErrorBarContext-CAZ1Nd8e.js";import"./GraphicalItemClipPath-BsVVWJrM.js";import"./SetGraphicalItem-BkJcCs8V.js";import"./getZIndexFromUnknown-D3mzutan.js";import"./useGraphicalItemIdentity-CNWhuATd.js";import"./Curve-BLS66xAF.js";import"./step-CA28nkdr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C8OEAzuD.js";import"./Dot-B4gb0ExT.js";import"./getRadiusAndStrokeWidthFromDot-Bj_75x8K.js";import"./useElementOffset-DIK-eXNy.js";import"./uniqBy-DCe0PNdF.js";import"./iteratee-eCwGGnHr.js";import"./Cross-WFlJtkPB.js";import"./Sector-BrJ9rphR.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
