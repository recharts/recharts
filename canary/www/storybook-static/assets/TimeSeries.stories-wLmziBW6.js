import{R as e}from"./iframe-BO6kNEfQ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DUMRPyWG.js";import{R as h}from"./zIndexSlice-CSvwJ_UT.js";import{C as g}from"./ComposedChart-BIhV4Cn8.js";import{L as x}from"./Line-By4A7qsj.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B89J0uLC.js";import{T as V}from"./Tooltip-BJ6ncSEb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DkQVUKnt.js";import"./Layer-DAnsZuJj.js";import"./resolveDefaultProps-DeeWTLmP.js";import"./Text-CvDq8Z5Q.js";import"./DOMUtils-DjzhJzRg.js";import"./isWellBehavedNumber-B-Ulh-Re.js";import"./useId-CAIxAqit.js";import"./useBackwardsCompatibleTheme-DwFWyF9F.js";import"./Label-ktTcBfs2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BVG745mx.js";import"./index-C9e-3BIk.js";import"./index-CAnCLEru.js";import"./types-CrvIZc3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyXD3owy.js";import"./throttle-CC5fq1IH.js";import"./index-CTBq7QCd.js";import"./index-BiTwoYeC.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BjhorxtA.js";import"./axisSelectors-clIGt-1m.js";import"./index-DGFWSvO2.js";import"./CartesianChart-DbU3p1bm.js";import"./chartDataContext-C8PMDwYi.js";import"./CategoricalChart-BBSMzdqi.js";import"./Curve-hgySA8iE.js";import"./step-BjM5lwd1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-FM3uBbR2.js";import"./useAnimationId-NFss7X44.js";import"./ActivePoints--BVAgljg.js";import"./Dot-Bps0tpeZ.js";import"./RegisterGraphicalItemId-DXmwJq0A.js";import"./ErrorBarContext-DAb2_Ge3.js";import"./GraphicalItemClipPath-CqCtj_pv.js";import"./SetGraphicalItem-CMnburaU.js";import"./getRadiusAndStrokeWidthFromDot-TV6VUSJm.js";import"./ActiveShapeUtils-CRw266nd.js";import"./useGraphicalItemIdentity-BOcRclg4.js";import"./useElementOffset-Bows1p5H.js";import"./uniqBy-QqkFbTHY.js";import"./iteratee-CYMuw_Xv.js";import"./Cross-DDTRSnDt.js";import"./Rectangle-bQ1U5Rvt.js";import"./util-Dxo8gN5i.js";import"./Sector-CsR_fyCv.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
