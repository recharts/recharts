import{R as t}from"./iframe-C2IAoP9z.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CkTJLDxP.js";import{R as l}from"./zIndexSlice-BOdY0c2w.js";import{C as x}from"./ComposedChart-B9_G-h0N.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJRDlvXX.js";import{L as a}from"./Line-Cw_tbLsT.js";import{X as c}from"./XAxis-Ceu0E44T.js";import{T as g}from"./Tooltip-CSD5N63w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DAn48o-H.js";import"./Text-Cay_E7zv.js";import"./resolveDefaultProps-CEcc3HUE.js";import"./DOMUtils-SGZ0CxAs.js";import"./isWellBehavedNumber-Dx9jutoa.js";import"./useId-B5XgiE_K.js";import"./useBackwardsCompatibleTheme-Dqn1q3dG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqO-ONcy.js";import"./index-Bc8qjgC3.js";import"./index-OAErDOz1.js";import"./RechartsWrapper-CGBW-uJJ.js";import"./index-ozLvQTxr.js";import"./index-Dzs-h2I5.js";import"./throttle-CMLI9bDX.js";import"./axisSelectors-Cc0lgYtN.js";import"./d3-scale-Cvy-Ur2o.js";import"./renderedTicksSlice-CQpIMs9x.js";import"./CartesianAxis-CxQqbA0R.js";import"./Layer-c70k-pgH.js";import"./types-BONlApS2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dhpx6_3-.js";import"./chartDataContext-D77crK3E.js";import"./CategoricalChart-Q-FJ4faS.js";import"./AnimatedItems-D3kWiSe3.js";import"./useAnimationId-DzFP_Ei6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I7JckY3r.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-dJNYAFGN.js";import"./tooltipContext-DMq3_cys.js";import"./RegisterGraphicalItemId-BFnewc-x.js";import"./ErrorBarContext-XS2v7-8C.js";import"./GraphicalItemClipPath-j5P5g_UT.js";import"./SetGraphicalItem-CB0dHT4c.js";import"./getZIndexFromUnknown-DWwGDHhC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CWQ_KFxX.js";import"./Curve-Dgd-wDO-.js";import"./step-DmsxAhZl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D57dx6Bs.js";import"./Dot-BXKPSTnn.js";import"./getRadiusAndStrokeWidthFromDot-BlVIdv42.js";import"./useElementOffset-BlQ6_KNY.js";import"./uniqBy-Dak74J6O.js";import"./iteratee-CHgj4-IF.js";import"./Cross-BuISlzpb.js";import"./Sector-YB4DXi_y.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
