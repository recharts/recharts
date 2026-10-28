import{R as e}from"./iframe-BmTk4yvk.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-p_vhpROA.js";import{R as h}from"./zIndexSlice-Yn5j7TCZ.js";import{C as g}from"./ComposedChart-Bc1PW_h6.js";import{L as x}from"./Line-IaR1SHtj.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B_DRoaP4.js";import{T as V}from"./Tooltip-Dbu0x0bj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DCukA67Z.js";import"./Layer-DW7OR7eh.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./Text-U4GGp_wV.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./Label-CYaQfkAd.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./throttle-C169ds0A.js";import"./types-BwQb0UT4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-jta8-9EA.js";import"./RechartsWrapper-C4oIzQNw.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./Curve-DHjJHUtL.js";import"./step-X3pWD_rY.js";import"./path-DyVhHtw_.js";import"./LabelList-DAIqpE2b.js";import"./ActivePoints-D2fdi6S1.js";import"./Dot-DCITuPps.js";import"./activeStyles-PiE_qWsW.js";import"./useAnimationId-Crx209Lx.js";import"./dataEntryStyles-D6I3YMTN.js";import"./Symbols-C5McylxL.js";import"./symbol-DPYOxqZZ.js";import"./ErrorBarContext-BA2m5B_Z.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getRadiusAndStrokeWidthFromDot-K0OFVwh2.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./useEffectiveDataKey-B__g_9Jm.js";import"./useElementOffset-DovHdXKI.js";import"./uniqBy-CVbVBefT.js";import"./iteratee-Hm5_kqpS.js";import"./isArguments-yB-y1yaH.js";import"./Cross-lS0mKWas.js";import"./Rectangle-BQWOwYE7.js";import"./util-Dxo8gN5i.js";import"./Sector-D6DggYJm.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
