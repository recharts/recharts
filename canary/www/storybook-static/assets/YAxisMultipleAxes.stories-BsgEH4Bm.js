import{R as t}from"./iframe-B-rX_Ovq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cicu2WWw.js";import{R as l}from"./zIndexSlice-BsQifls5.js";import{C as x}from"./ComposedChart-BlAyCMqM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ChulcTN3.js";import{L as a}from"./Line-BuWbSkCp.js";import{X as c}from"./XAxis-SdNRN-8o.js";import{T as g}from"./Tooltip-DetbqLdq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DdRsJrM-.js";import"./CartesianAxis-Cxy1JVbR.js";import"./Layer-BzDAHWqw.js";import"./resolveDefaultProps-D1pz5wzG.js";import"./Text-CbyfEyi5.js";import"./DOMUtils-CImWbOuY.js";import"./isWellBehavedNumber-DgpUmT_-.js";import"./Label-CL0zassZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CFxBNrtU.js";import"./index-D2kGKgGj.js";import"./index-Bh_-T13z.js";import"./types-BrxUVIV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DQrcKm6F.js";import"./immer-DYOeNz8_.js";import"./RechartsWrapper-BCnMK_aC.js";import"./index-chviYFta.js";import"./index-CpJc3r_b.js";import"./axisSelectors-CfXFgmuu.js";import"./d3-scale-DG2A9yU0.js";import"./CartesianChart-Hr6f_olX.js";import"./chartDataContext-CWp3X-kc.js";import"./CategoricalChart-BH_EAWmt.js";import"./tooltipContext-Bq4LI70d.js";import"./AnimatedItems-C_X3btbZ.js";import"./useAnimationId-Bc7mMz9I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNA8eQFW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cb8N5twM.js";import"./RegisterGraphicalItemId-DRp7yt-Z.js";import"./ErrorBarContext-D1MAgXEd.js";import"./GraphicalItemClipPath-gUtT7Str.js";import"./SetGraphicalItem-mNTSaJYY.js";import"./getZIndexFromUnknown-zyJ_61yv.js";import"./graphicalItemSelectors-D_FjOrWh.js";import"./Curve-T3BWQcql.js";import"./step-h3zMWkhs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CPbnnH6m.js";import"./Dot-CQVjNDgk.js";import"./getRadiusAndStrokeWidthFromDot-CJuF-Sfd.js";import"./useElementOffset-C_sA79AG.js";import"./uniqBy-CFa47bhd.js";import"./iteratee-B4Wcwj0D.js";import"./Cross-DWFZy1fI.js";import"./Sector-UhwsFj4Q.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
