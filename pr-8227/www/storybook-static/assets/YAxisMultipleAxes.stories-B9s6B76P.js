import{R as t}from"./iframe-BaiXEn0-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DuwRFPvA.js";import{R as l}from"./zIndexSlice-CSqAGFLj.js";import{C as x}from"./ComposedChart-DKPCp_TU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-1Ya73Dri.js";import{L as a}from"./Line-CDkCfB7G.js";import{X as c}from"./XAxis-BhEilA83.js";import{T as g}from"./Tooltip-BlwcuSuu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CWe40LeI.js";import"./Text-Dz83mHfX.js";import"./resolveDefaultProps-CefoQJzZ.js";import"./ZIndexLayer-BmwEMujN.js";import"./index-BK6mpLXi.js";import"./index-BrUJM5DD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Com92wlg.js";import"./throttle-D7xKVZuZ.js";import"./axisSelectors-s8isxUHu.js";import"./d3-scale-Bpc0urwb.js";import"./CartesianAxis-CXgLYYat.js";import"./Layer-Dc68LG4Z.js";import"./types-C6nAEk1h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GEdADU7H.js";import"./index-CGBcSxqi.js";import"./index-YBD3MlPN.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BRQNcvpu.js";import"./index-BuGbfhN1.js";import"./fillDefinitions-mAC2wE0k.js";import"./CartesianChart-DzuueLPv.js";import"./chartDataContext-DoyYqW6X.js";import"./CategoricalChart-D2YsyGqx.js";import"./dataEntryStyles-CA2v1itW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DBwLqskU.js";import"./useAnimationId-FtoyJDPN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRs_VSCT.js";import"./tooltipContext-FuvoFEqQ.js";import"./ErrorBarContext-BDsV7QiN.js";import"./activeStyles-CYcJyLiS.js";import"./SetGraphicalItem-CuWVAy3A.js";import"./getZIndexFromUnknown-CGwC5-Px.js";import"./useEffectiveDataKey-l-c80nhy.js";import"./omit-DyM5CAkJ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dg6PTrHd.js";import"./step-Csdb5mG5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dk_HtJnf.js";import"./Dot-CesDwFF2.js";import"./Symbols-cv2IRaTf.js";import"./symbol-CRYIzv0a.js";import"./getRadiusAndStrokeWidthFromDot-DS02tJFS.js";import"./useElementOffset-53YyRLbB.js";import"./uniqBy-jcM0FYxk.js";import"./iteratee-DwgGl-hX.js";import"./Cross-irpLZife.js";import"./Sector-CCPexxFy.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
