import{R as t}from"./iframe-D-xaWYx8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DvS3ruRg.js";import{R as l}from"./zIndexSlice-D3SQ2MTt.js";import{C as x}from"./ComposedChart-BU0Kbz0Z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CbTn4WuX.js";import{L as a}from"./Line-BZDALygc.js";import{X as c}from"./XAxis-CMZs7JPg.js";import{T as g}from"./Tooltip-Dxi5xH2m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-1rgKTcFA.js";import"./Text-0YUR20e7.js";import"./resolveDefaultProps-Js9uooEF.js";import"./pageBackground-DVX0bm4d.js";import"./ZIndexLayer-E_Dtb0Mx.js";import"./index-B0Sv0m1A.js";import"./index-CA946KFv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B6of_7Ld.js";import"./throttle-BmvgL6Rb.js";import"./axisSelectors-DG_H3BOM.js";import"./d3-scale-fHLtEQjZ.js";import"./CartesianAxis-Df6qFn96.js";import"./Layer-BIK5Xkd-.js";import"./types-Bc5RKUKD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-L8xFZ5qK.js";import"./index-DJEWl4Hb.js";import"./index-ByDoJ5qb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BqPcQfd6.js";import"./index-BBNxXXGk.js";import"./CartesianChart-Dmz6gYzC.js";import"./ZIndexPortal-BwYTG8oV.js";import"./CategoricalChart-q3kg2ZZV.js";import"./LabelList-ZtaAtRMQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbRUJHHI.js";import"./useAnimationId-CvbEaa0a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wywHDhQW.js";import"./tooltipContext-nIaZWK7s.js";import"./dataEntryStyles-Dh5c7_-V.js";import"./ErrorBarContext-ChtZm3AF.js";import"./activeStyles-QtdqAqWx.js";import"./SetGraphicalItem-DMIM43_P.js";import"./getZIndexFromUnknown-BBqLZbMG.js";import"./useEffectiveDataKey-D7oticDs.js";import"./omit-C9bmV5yv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BcR2PIcQ.js";import"./step-Dvrj1lLE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-13gcbTTt.js";import"./Dot-Chr86R6e.js";import"./Symbols-DPqFwa0y.js";import"./symbol-BsZHRk5J.js";import"./getRadiusAndStrokeWidthFromDot-CuwhE4ca.js";import"./useElementOffset-gwYrbjUM.js";import"./uniqBy-BEACZ9BP.js";import"./iteratee-nU-bJWRc.js";import"./Cross-BLSgl_wa.js";import"./Sector-BClyFizE.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
