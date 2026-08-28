import{R as t}from"./iframe-D3n-qa3v.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B-l06g0y.js";import{R as l}from"./zIndexSlice-URMJGlQl.js";import{C as x}from"./ComposedChart-IfzjzOLd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C40_3rUx.js";import{L as a}from"./Line-UgcJB4CE.js";import{X as c}from"./XAxis-BvFg4s2o.js";import{T as g}from"./Tooltip-D8w_jK1y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CpaVgYY8.js";import"./Text-70ucIKSF.js";import"./resolveDefaultProps-Cvq-kyHH.js";import"./DOMUtils-CcpQZ2_k.js";import"./isWellBehavedNumber-CrERG1s-.js";import"./useId-B_N_AB1U.js";import"./useBackwardsCompatibleTheme-BAQfNZQf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hb7j23f9.js";import"./index-C_ri2ApK.js";import"./index-Dd3rxVYb.js";import"./RechartsWrapper-DDHIckB2.js";import"./axisSelectors-DaB7yAHm.js";import"./throttle-DN7vm2uB.js";import"./d3-scale-CaZKGVIZ.js";import"./index-C_Wrm-XW.js";import"./index-CZCnJbjp.js";import"./renderedTicksSlice-CPTSo4fz.js";import"./index-C1lTKvWo.js";import"./CartesianAxis-Cx3S-3lL.js";import"./Layer-oKfk3hYA.js";import"./types-DvyNYfPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DUso81Db.js";import"./chartDataContext-CZa0hGfr.js";import"./CategoricalChart-CGaW84Rd.js";import"./AnimatedItems-CRkuoQfP.js";import"./useAnimationId-CKWjvm6q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIHrotSs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0ntRQ4Qt.js";import"./tooltipContext-7QS7o6eC.js";import"./RegisterGraphicalItemId-DsY94qP2.js";import"./ErrorBarContext-DijZHKAW.js";import"./GraphicalItemClipPath-Ch9sm1k7.js";import"./SetGraphicalItem-BmMhxnaz.js";import"./getZIndexFromUnknown-DhGOj4bU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DH8vxCD6.js";import"./Curve-5zGakvVQ.js";import"./step-CxhIdSSF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BFpUc-QU.js";import"./Dot-DbNEtbef.js";import"./getRadiusAndStrokeWidthFromDot-0WjElrhg.js";import"./useElementOffset-E97WR8Kk.js";import"./uniqBy-DeyvTwgR.js";import"./iteratee-CJAX1ry0.js";import"./Cross-DUS7QXUz.js";import"./Sector-B1HZ_hCy.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
