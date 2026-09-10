import{R as e}from"./iframe-C3cMgs7N.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-FEXGRCPo.js";import{R as h}from"./zIndexSlice-D-L1krEw.js";import{C as g}from"./ComposedChart-B0L49GOK.js";import{L as x}from"./Line-qJZBDGuF.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D9HAsSWg.js";import{T as V}from"./Tooltip-armKHNsC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Cm_mWvUj.js";import"./Layer-B4ssOgoe.js";import"./resolveDefaultProps-VIGlyQ4Q.js";import"./Text-BJKUimah.js";import"./DOMUtils-DEPBoe7u.js";import"./isWellBehavedNumber-loxwPj_L.js";import"./useId-B00C84E0.js";import"./useBackwardsCompatibleTheme-yxpwTzAk.js";import"./Label-p42oyH6O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Beq1j20z.js";import"./index-mPjB9LZ5.js";import"./index-DWDQXKDL.js";import"./types-BRZWQnVt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLxMgK4j.js";import"./throttle-CwKbnzuB.js";import"./index-iS8UOd73.js";import"./index-CbpSVjN5.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BBL8LSCF.js";import"./axisSelectors-CyFo4akS.js";import"./index-CK2o4ASw.js";import"./CartesianChart-BYHp5epD.js";import"./chartDataContext-CUGiPJA1.js";import"./CategoricalChart-BrdbHA9J.js";import"./Curve-Cd2PH3uW.js";import"./step-BchzuBRK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CeXZD4iR.js";import"./useAnimationId-Bsfqf9JH.js";import"./ActivePoints-CeVGeC-b.js";import"./Dot-DHWsLk6I.js";import"./RegisterGraphicalItemId-Ce557wgI.js";import"./ErrorBarContext-Bcyk1pto.js";import"./GraphicalItemClipPath-6iwmqxiy.js";import"./SetGraphicalItem-NnzstWhO.js";import"./getRadiusAndStrokeWidthFromDot-Bp5N-w6q.js";import"./ActiveShapeUtils-CBqTe_nx.js";import"./useGraphicalItemIdentity-BrYniqkC.js";import"./useElementOffset-C6z2yXVE.js";import"./uniqBy-D9evTCTx.js";import"./iteratee-DQXLPY2T.js";import"./Cross-C79SN9P2.js";import"./Rectangle-CfdBkyVH.js";import"./util-Dxo8gN5i.js";import"./Sector-31CjT2g4.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
