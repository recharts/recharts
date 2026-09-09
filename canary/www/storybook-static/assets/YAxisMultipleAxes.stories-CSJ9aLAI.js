import{R as t}from"./iframe-AEyLiqgG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C0feA8qB.js";import{R as l}from"./zIndexSlice-D63QIr0o.js";import{C as x}from"./ComposedChart-d9_wimj2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DEcf2_pb.js";import{L as a}from"./Line-CatYAh6P.js";import{X as c}from"./XAxis-DSCoP0BT.js";import{T as g}from"./Tooltip-3jx0z5GS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dgv50JbQ.js";import"./Text-CjbzIRNa.js";import"./resolveDefaultProps-DP3BTRCk.js";import"./DOMUtils-D23knL3w.js";import"./isWellBehavedNumber-CgqhIRbA.js";import"./useId-CE7L0gFR.js";import"./useBackwardsCompatibleTheme-BeLYcOfU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKKDdXeu.js";import"./index-C1HLBiKP.js";import"./index-DRegLE30.js";import"./RechartsWrapper-r-JuCoEl.js";import"./axisSelectors-Drhca-__.js";import"./throttle-Bat5tgt5.js";import"./d3-scale-BLrrudvV.js";import"./index-qjC2aIyR.js";import"./index-BZWHGH__.js";import"./renderedTicksSlice-CAIsZf4o.js";import"./index-DlIzpnmQ.js";import"./CartesianAxis-NrPVgzth.js";import"./Layer-vEMMDrrH.js";import"./types-C4U-Yuut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DnWnPxAf.js";import"./chartDataContext-D_5ADK7F.js";import"./CategoricalChart-h7ez30w9.js";import"./AnimatedItems-Du4BhFIJ.js";import"./useAnimationId-DhGl4rOB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4fa9PUqa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cns3WvQL.js";import"./tooltipContext-D88H2knB.js";import"./RegisterGraphicalItemId-CBHkDVSs.js";import"./ErrorBarContext-BCLiwnce.js";import"./GraphicalItemClipPath-TjZaHmNz.js";import"./SetGraphicalItem-D3eOc8Q8.js";import"./getZIndexFromUnknown-BAi2cYYG.js";import"./useGraphicalItemIdentity-Cs1UF85t.js";import"./Curve-XYWVXy9Z.js";import"./step-Dc7t_wqW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DgZdabsv.js";import"./Dot-DYEfFyl7.js";import"./getRadiusAndStrokeWidthFromDot-BJa_7REZ.js";import"./useElementOffset-__RE1Pit.js";import"./uniqBy-DLTO14X5.js";import"./iteratee-Bm9lS3_Q.js";import"./Cross-jnN_tCXu.js";import"./Sector-Y0P_Mb4w.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
