import{R as e}from"./iframe-CRWpOW02.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D1dQPR-6.js";import{R as h}from"./zIndexSlice-BeAe48-I.js";import{C as g}from"./ComposedChart-CnCPKGvA.js";import{L as x}from"./Line-Ci7qyRY8.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-d-dAzt7l.js";import{T as V}from"./Tooltip-BgvFandc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BjJPyt3G.js";import"./Layer-CNbUO4cy.js";import"./resolveDefaultProps-BGJ-s5wM.js";import"./Text-159WNhne.js";import"./pageBackground-CeS3kx1x.js";import"./isWellBehavedNumber-DnvCGmEU.js";import"./useId-ECIur30B.js";import"./useBackwardsCompatibleTheme-4poegSRB.js";import"./Label-C0mxneHa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CE46bnfu.js";import"./index-CqqjX4mb.js";import"./index-BtZZPVlj.js";import"./types-VHH142lq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D6XZoNOx.js";import"./throttle-CYPAZ-oY.js";import"./index-Br2LofN0.js";import"./index-D_MdTA2d.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-CEaTU0uL.js";import"./RechartsWrapper-BIU9TwkO.js";import"./index-CqBbZHkF.js";import"./CartesianChart-BKIvGl2K.js";import"./chartDataContext-BIcAjQe6.js";import"./CategoricalChart-DHoPXZtk.js";import"./Curve-DSopOTRT.js";import"./step-VbmBsaRU.js";import"./path-DyVhHtw_.js";import"./activeStyles-qMzt72fn.js";import"./useAnimationId-D92beKJG.js";import"./dataEntryStyles-BglHhD-H.js";import"./ActivePoints-CSFa2gcu.js";import"./Dot-CX4mMU05.js";import"./ErrorBarContext-Bq-5TM9D.js";import"./GraphicalItemClipPath-Baz6IWCm.js";import"./SetGraphicalItem-CHlvRlHN.js";import"./getRadiusAndStrokeWidthFromDot-Cla7tf7Y.js";import"./ActiveShapeUtils-CJ3uGwKk.js";import"./useEffectiveDataKey-BpgvrKzX.js";import"./useElementOffset-B4u2V-V0.js";import"./uniqBy-hsCh7ews.js";import"./iteratee-B8ts1Ce8.js";import"./Cross-Du1xWbjF.js";import"./Rectangle-5Ov4WxTU.js";import"./util-Dxo8gN5i.js";import"./Sector-WsHTbLWJ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
