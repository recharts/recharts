import{R as t}from"./iframe-rnrsK-Eh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CebqVQrE.js";import{R as l}from"./zIndexSlice-D3HmR0ZR.js";import{C as x}from"./ComposedChart-D54WX9hH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BUeCKdYR.js";import{L as a}from"./Line-BDX7TuS6.js";import{X as c}from"./XAxis-DcA-2yah.js";import{T as g}from"./Tooltip-DFlRaAqD.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./Label-DJYYuUsE.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B1h4eON8.js";import"./throttle-BHymO33n.js";import"./axisSelectors-CIZ-q5JG.js";import"./d3-scale-BaDfMMmk.js";import"./CartesianAxis-ZiuFLH_J.js";import"./Layer-D4ktbd_J.js";import"./types-CAJhQIqW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BZjQac1j.js";import"./index-BcrgJFGN.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-tBuCuUXe.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./chartDataContext-BaXmKLtm.js";import"./CategoricalChart-B0mb1tZK.js";import"./dataEntryStyles-DPy91L9k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8OmFGHQb.js";import"./useAnimationId-COqzWo9S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./tooltipContext-DbU0ZZ86.js";import"./ErrorBarContext-YhaLsFzE.js";import"./activeStyles-9CDj_AEF.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./getZIndexFromUnknown-CY1dy49c.js";import"./useEffectiveDataKey-DftwbdUx.js";import"./omit-Cn0MF7xB.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Aa26YM9W.js";import"./Curve-B8ieUi4B.js";import"./step-BNGv-ij0.js";import"./path-BBMZd4YL.js";import"./ActivePoints-G3nCAY-X.js";import"./Dot-CpkbvyGy.js";import"./Symbols-CFUB5kvN.js";import"./symbol-B4eSOryt.js";import"./useElementOffset-BnxZL8WN.js";import"./uniqBy-C0Cq__z-.js";import"./iteratee-CngnK0pj.js";import"./Cross-BmKhywuH.js";import"./Sector-C0IDAhtH.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
