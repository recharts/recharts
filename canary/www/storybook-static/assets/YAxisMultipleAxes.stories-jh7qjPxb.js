import{R as t}from"./iframe-BH_ynjC4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-zkDdPwB0.js";import{R as l}from"./zIndexSlice-BI1ysfjy.js";import{C as x}from"./ComposedChart-CZ5mgmPm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DyycvxsZ.js";import{L as a}from"./Line-BbFfXssg.js";import{X as c}from"./XAxis-DHYBvz-p.js";import{T as g}from"./Tooltip-BsEVo9XM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-FZu_WDSG.js";import"./Text-DIx256cP.js";import"./resolveDefaultProps-BlxwprZn.js";import"./DOMUtils-Cq_tvs96.js";import"./isWellBehavedNumber-BHoIJZLy.js";import"./useId-POUb9F1l.js";import"./useBackwardsCompatibleTheme-BDKfSYgg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DJFUyPkd.js";import"./index-RF2vHOS8.js";import"./index-DbazBVJ8.js";import"./RechartsWrapper-BODbUaHb.js";import"./axisSelectors-BuZGyw5u.js";import"./throttle-B92nZ18Y.js";import"./d3-scale-3O5mTbCq.js";import"./index-C7z_bQHY.js";import"./index-B2CUqXvo.js";import"./renderedTicksSlice-AZvUrajM.js";import"./index-483Wu6hp.js";import"./CartesianAxis-L0O2lUH5.js";import"./Layer-BZJOgrQn.js";import"./types-BCqSdCtd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-x2wpl3h2.js";import"./chartDataContext-D5KYfl9L.js";import"./CategoricalChart-CQ3zK25U.js";import"./AnimatedItems-BzetGmJU.js";import"./useAnimationId-dKpzhWqB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcuPIW-h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-vPOXs-PX.js";import"./tooltipContext-CzkBNMsY.js";import"./RegisterGraphicalItemId-BaYVXJgS.js";import"./ErrorBarContext-C6wSEKqb.js";import"./GraphicalItemClipPath-CJUrTS9M.js";import"./SetGraphicalItem-CVCJo--0.js";import"./getZIndexFromUnknown-C0VMxTb-.js";import"./useGraphicalItemIdentity-CmFW8bhj.js";import"./Curve-C9UO5Z1_.js";import"./step-ClVzp-XC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BK4U7PBG.js";import"./Dot-T-B_JEuw.js";import"./getRadiusAndStrokeWidthFromDot-La0lgpRv.js";import"./useElementOffset-Bxs2wRxM.js";import"./uniqBy-CpZpE7BS.js";import"./iteratee-De5tWLyW.js";import"./Cross-Brke_oJN.js";import"./Sector-DAI5K_6q.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
