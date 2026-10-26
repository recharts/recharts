import{R as t}from"./iframe-C-3ZsddJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D4KLVqJs.js";import{R as l}from"./zIndexSlice-CznyzfFG.js";import{C as x}from"./ComposedChart-CtuYyNef.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C5_fOXmu.js";import{L as a}from"./Line-eY7q5xtu.js";import{X as c}from"./XAxis-ZaXNF9D9.js";import{T as g}from"./Tooltip-iM448N5g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKMse05f.js";import"./Text-gCPwfBz1.js";import"./resolveDefaultProps-4qg6ukUo.js";import"./pageBackground-Bkm5uuC-.js";import"./isWellBehavedNumber-CP7J40iL.js";import"./useId-BDuxZkB8.js";import"./useBackwardsCompatibleTheme-X6WlIU0M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-G1m3PEiN.js";import"./index-DEbaciLb.js";import"./index--fwLI_yC.js";import"./dataEntryStyles-CEJLUdCX.js";import"./axisSelectors-BJ1i-OvH.js";import"./throttle-B2MnXNQi.js";import"./d3-scale-DV_TqrZd.js";import"./CartesianAxis-BdVIPGTu.js";import"./Layer-Cx38LgLI.js";import"./types-DCBC51xd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ICI7wfEt.js";import"./index-CcPqlA3d.js";import"./index-CyMO1IzJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-wMqgqvbl.js";import"./index-ClJuK0WQ.js";import"./CartesianChart-COKBOn7U.js";import"./chartDataContext-BcbpFEXE.js";import"./CategoricalChart-sAB9uLf6.js";import"./activeStyles-L7DCCiqF.js";import"./useAnimationId-SiWxI2IO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFI7v7xW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DDCkf_lK.js";import"./tooltipContext-DIAgqQux.js";import"./RegisterGraphicalItemId-CDIE6wwE.js";import"./ErrorBarContext-CDKXoSuu.js";import"./SetGraphicalItem-BIMysWhn.js";import"./getZIndexFromUnknown-cweALYLX.js";import"./useEffectiveDataKey-B7scz4IZ.js";import"./omit-B1ykJwbX.js";import"./isArguments-yB-y1yaH.js";import"./Curve-W1QfAwKp.js";import"./step-DTUF9rZD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BcMP_3VG.js";import"./Dot-BAgolGjt.js";import"./getRadiusAndStrokeWidthFromDot-DU6SJcR2.js";import"./useElementOffset-BHApDFqY.js";import"./uniqBy-B15nsN6v.js";import"./iteratee-iSL6B2R2.js";import"./Cross-B6l53nAc.js";import"./Sector-CGlTysj4.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
